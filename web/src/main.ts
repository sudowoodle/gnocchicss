import { ViteSSG } from 'vite-ssg'
import type { RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { createPinia } from 'pinia';

import 'modern-normalize/modern-normalize.css';

import './styles.scss'
import App from './app.vue'
import { routes as publicRoutes } from './views/public/router';
import { routes as cheatsheetRoutes } from './views/cheatsheet/router';
import NotFound from './views/not-found.vue';

import { useRootStore } from './store/root.ts'

const routes: RouteRecordRaw[] = [
    ...publicRoutes,
    ...cheatsheetRoutes,
    { path: "/:pathMatch(.*)", component: NotFound }

];


// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
    // the root component
    App,
    // vue-router options
    {
        routes,
    },
    async ({ app, router, initialState }) => {
        const pinia = createPinia();
        app.use(pinia);


        if (import.meta.env.SSR) {
            // Initialize prerender state
            const rootStore = useRootStore(pinia);
            await rootStore.initialize();

            initialState.pinia = pinia.state.value
        } else {
            pinia.state.value = initialState.pinia || {}

            router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
                const store = useRootStore(pinia)
                if (!store.ready)
                    // perform the (user-implemented) store action to fill the store's state
                    await store.initialize()
                next()
            })
        }
    },
)