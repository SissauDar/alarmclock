import Vue from 'vue'
import Vuex from 'vuex'

import idb from '../utils/idb';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    now: null,
    amount: 0
  },
  mutations: {
  },
  actions: {
    async deleteItem(context, todo) {
      await idb.deleteItem(todo);
    },
    async getItemById(context, id) {
      context.state.now = await idb.getItemById(id);
    },
    async getItems(context) {
      context.state.todos = [];
      let todos = await idb.getItems();
      todos.forEach(c => {
        context.state.todos.push(c);
      });
      context.state.amount = context.state.todos.length;
    },
    async saveItem(context, todos) {
      await idb.saveItem(todos);
    }
  },
  modules: {
  }
})
