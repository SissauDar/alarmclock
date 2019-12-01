const DB_NAME = 'itemdb';
const DB_VERSION = 1;
let DB;

// import idb from '../utils/idb';

export default {

    async getDb() {
        return new Promise((resolve, reject) => {

            if (DB) { return resolve(DB); }
            let request = window.indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = e => {
                console.log('Error opening db', e);
                reject('Error');
            };

            request.onsuccess = e => {
                DB = e.target.result;
                console.log('OPENING DB', DB);
                resolve(DB);
            };

            request.onupgradeneeded = e => {
                console.log('onupgradeneeded');
                let db = e.target.result;
                db.createObjectStore("items", { autoIncrement: false, keyPath: 'id' });
            };
        });
    },
    async deleteItem(item) {

        let db = await this.getDb();

        return new Promise(resolve => {

            let trans = db.transaction(['items'], 'readwrite');
            trans.oncomplete = () => {
                resolve();
            };

            let store = trans.objectStore('items');
            store.delete(item.id);
        });
    },
    async getItems() {

        let db = await this.getDb();

        return new Promise(resolve => {

            let trans = db.transaction(['items'], 'readonly');
            trans.oncomplete = () => {
                resolve(items);
            };

            let store = trans.objectStore('items');
            let items = [];

            store.openCursor().onsuccess = e => {
                let cursor = e.target.result;
                if (cursor) {
                    items.push(cursor.value)
                    cursor.continue();
                }
            };

        });
    },
    async getItemById(id) {

        let db = await this.getDb();

        return new Promise(resolve => {

            let trans = db.transaction(['items'], 'readonly');
            trans.oncomplete = () => {
                resolve(items);
            };

            let store = trans.objectStore('items');
            let items = [];

            store.openCursor().onsuccess = e => {
                let cursor = e.target.result;
                if (cursor) {
                    if (cursor.key == id) {
                        items.push(cursor.value)
                    }

                    cursor.continue();
                }
            };

        });
    },

    async saveItem(item) {

        let db = await this.getDb();

        return new Promise(resolve => {

            let trans = db.transaction(['items'], 'readwrite');
            trans.oncomplete = () => {
                resolve();
            };

            let store = trans.objectStore('items');
            store.put(item);

        });

    }

}