import './assets/scss/all.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue'
import Index from './components/index.vue'
import Service from './components/service.vue'
import About from './components/about.vue'
import Contact from './components/contact.vue'

import { Tooltip, Tab, Dropdown, Modal, Collapse, Ripple, initTWE } from "tw-elements";

// 確保 DOM 載入完成後才初始化
document.addEventListener("DOMContentLoaded", () => {
    initTWE({ Tooltip, Tab, Dropdown, Modal, Collapse, Ripple });
});

// 根據 #app 上的 data-page 屬性決定要掛載哪個 Vue component
const appElement = document.querySelector('#app')
if (appElement) {
    let appComponent

    switch (appElement.dataset.page) {
        case 'service':
            appComponent = Service
            break
        case 'about':
            appComponent = About
            break
        case 'contact':
            appComponent = Contact
            break
        case 'index':
        default:
            appComponent = Index
    }

    createApp(appComponent).mount('#app')
}