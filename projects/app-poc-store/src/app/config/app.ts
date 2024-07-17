import { APPS } from '@config/app-list';
import { APP_CONFIG } from '@config/apps';
import { AUTHORS_LIST } from '@config/author-list';


export const APP_STORE_APP_CONFIG: APP_CONFIG = {
    key: APPS.STORE,
    image: '',
    title: 'Store',
    description: 'List of apps POC',
    layoutComponent: () => import('lib-default-template').then(c => c.LayoutComponent),
    route: APPS.STORE,
    routes: () => import('@projects/app-poc-store/src/app/config/pages').then((r) => r.PAGE_ROUTES),
    author: AUTHORS_LIST.PAVEL_SUK,
    scriptsToPreload: [],
}

