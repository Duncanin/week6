import './assets/scss/all.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue'
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'
import Index from './components/index.vue'
import Service from './components/service.vue'
import About from './components/about.vue'
import Contact from './components/contact.vue'

// TWE
import { Tooltip, Tab, Dropdown, Modal, Collapse, Ripple, initTWE } from "tw-elements";

// 確保 DOM 載入完成後才初始化
document.addEventListener("DOMContentLoaded", () => {
    initTWE({ Tooltip, Tab, Dropdown, Modal, Collapse, Ripple });

    // 自動掛載所有 data-page 的 Vue 元件
    const mountPoints = document.querySelectorAll('[data-page]')

    mountPoints.forEach(el => {
        const page = el.dataset.page
        let component = null

        switch (page) {
        case 'header':
            component = Header
            break
        case 'footer':
            component = Footer
            break
        case 'service':
            component = Service
            break
        case 'about':
            component = About
            break
        case 'contact':
            component = Contact
            break
        case 'index':
        default:
            component = Index
        }

        if (component) {
        createApp(component).mount(el)
        }
    })
})