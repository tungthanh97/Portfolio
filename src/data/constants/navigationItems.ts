import { INavBarItem } from '@package/lib/types/components';

export const navBarContent = Object.freeze([
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Projects',
        link: '/projects',
    },
    {
        title: 'Blog',
        link: '/blog',
    },
    {
        title: 'Articles',
        link: '/articles',
    },
]) as INavBarItem[];
