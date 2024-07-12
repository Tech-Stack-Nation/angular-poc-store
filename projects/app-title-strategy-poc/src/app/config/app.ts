
import { APP_CONFIG } from "@config/apps";
import { APPS } from "@config/app-list";

export const TITLE_STRATEGY_APP_CONFIG: APP_CONFIG = {
    key: APPS.TITLE_STRATEGY,
    image: 'https://assets.htmlgoodies.com/uploads/2021/04/stylingblocks.png',
    title: 'Title strategy POC',
    description: 'Showing custom title strategy for dynamic page header usage',
    layoutComponent: () => import('lib-default-template').then(c => c.LayoutComponent),
    route: APPS.TITLE_STRATEGY,
    routes: () => import('@projects/app-title-strategy-poc/src/app/config/pages').then((r) => r.TITLE_STRATEGY_APP_PAGE_ROUTES),
}

