
import { APPS } from '@config/app-list';
import { APP_CONFIG } from '@config/apps';
import { AUTHORS_LIST } from '@config/author-list';

export const DYNAMIG_GRID_APP_CONFIG: APP_CONFIG = {
    key: APPS.DYNAMIC_GRID,
    image: 'https://wpdatatables.com/wp-content/uploads/2020/12/image_processing20200517-24164-1ojaghe.jpg',
    title: 'Dynamic Grid POC',
    description: 'Showing DI override of Grid component',
    layoutComponent: () => import('lib-default-template').then(c => c.LayoutComponent),
    route: APPS.DYNAMIC_GRID,
    routes: () => import('@projects/app-dynamic-grid/src/app/config/pages').then((r) => r.DYNAMIC_GRID_APP_PAGE_ROUTES),
    author: AUTHORS_LIST.PAVEL_SUK,
    scriptsToPreload: [],
}