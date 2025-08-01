import './assets/scss/all.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue'
import Index from './components/index.vue'

import { Tooltip, Tab, Dropdown, Modal, Collapse, Ripple, initTWE } from "tw-elements";

// 確保 DOM 載入完成後才初始化
document.addEventListener("DOMContentLoaded", () => {
    initTWE({ Tooltip, Tab, Dropdown, Modal, Collapse, Ripple });
});

// 建立 Vue 應用並掛載到 #app
const app = createApp(Index)
app.mount('#app')