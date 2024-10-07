import '../css/app.css';
import './bootstrap';
import App from "./Pages/App.vue";
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import FontAwesomeIcon from './Components/FontAwesomeIcon/Index';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import router from './Router/Index';

createInertiaApp({
    resolve: name => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(router)
            .component('font-awesome-icon', FontAwesomeIcon)
            .use(ZiggyVue)
            .mount(el);
    },
});
