
import { APPS } from '@config/app-list';

export const DOCUMENTATION_APP_CONFIG = {
    key: APPS.DOCUMENTATION,
    image: 'https://assets.plan.io/images/blog/5-setps-to-create-technical-documentation.png',
    title: 'Documentation',
    description: 'App platform documentation with libs + apps',
    layoutComponent: () => import('lib-default-template').then(c => c.DocumentationLayoutComponent),
    route: APPS.DOCUMENTATION,
    routes: () => import('@projects/app-documentation/src/app/config/pages').then((r) => r.DOCUMENT_APP_PAGE_ROUTES),
}