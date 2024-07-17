
import { APPS } from '@config/app-list';
import { APP_CONFIG } from '@config/apps';
import { AUTHORS_LIST } from '@config/author-list';

export const DOCUMENTATION_APP_CONFIG: APP_CONFIG = {
    key: APPS.DOCUMENTATION,
    image: 'https://assets.plan.io/images/blog/5-setps-to-create-technical-documentation.png',
    title: 'Documentation',
    description: 'App platform documentation with libs + apps',
    layoutComponent: () => import('lib-default-template').then(c => c.DocumentationLayoutComponent),
    route: APPS.DOCUMENTATION,
    routes: () => import('@projects/app-documentation/src/app/config/pages').then((r) => r.DOCUMENT_APP_PAGE_ROUTES),
    author: AUTHORS_LIST.PAVEL_SUK,
    scriptsToPreload: [
        { src: 'scripts/prismjs/prism.js', children: [
                { src: 'scripts/prismjs/components/prism-typescript.min.js'},
                { src: 'scripts/prismjs/plugins/line-numbers/prism-line-numbers.js'},
                { src: 'scripts/prismjs/plugins/line-highlight/prism-line-highlight.js'},
            ] 
        },
        { src: 'scripts/emoji-toolkit/lib/js/joypixels.min.js'},
        { src: 'scripts/mermaid/dist/mermaid.min.js'}
    ],
}