export enum AUTHORS {
    PAVEL_SUK = 'PAVEL_SUK',
    BONNIE_BRENNAN = 'BONNIE_BRENNAN',
}

export interface AUTHOR_CONFIG {
    name: string;
    photo: string;
}

export const AUTHORS_LIST: Record<AUTHORS, AUTHOR_CONFIG> = {
    [AUTHORS.PAVEL_SUK]: {
        name: 'Pavel Suk',
        photo: 'https://media.licdn.com/dms/image/D4D03AQH-u3Mf4JjeYw/profile-displayphoto-shrink_400_400/0/1701254531462?e=1726704000&v=beta&t=zlMDJCgFfcgt7hMVgL5TTkUvHKfPYjb0VP5Uf7ltoOs',
    },
    [AUTHORS.BONNIE_BRENNAN]: {
        name: 'Bonnie Brennan',
        photo: 'https://media.licdn.com/dms/image/C5603AQEeRgVZA4tPBg/profile-displayphoto-shrink_400_400/0/1528318297112?e=1726704000&v=beta&t=WcIdf2uJJpz1Fd2hg67AvFK7HZtHETQ527gQW0HnzRY',
    }
}