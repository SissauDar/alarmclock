import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from '../assets/translations/en.json'
import nl from '../assets/translations/nl.json'
import zh from '../assets/translations/zh.json'
import rs from '../assets/translations/ru.json'

Vue.use(VueI18n);

let languageFiles = {
    en: en,
    nl: nl,
    zh: zh,
    rs: rs
}

const currentLocale = localStorage.getItem('locale') || 'en';


export const i18n = new VueI18n({
    locale: currentLocale,
    //fallbackLocale: 'en',
    messages: languageFiles
})