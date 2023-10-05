import { ILinkItemWithIcon } from '@package/lib/types/common';

const contactItems = Object.freeze([
    {
        title: 'email',
        link: 'mailTo:tung020197@gmail.com',
        icon: 'mail',
    },
    { title: 'github', link: 'https://github.com/tungthanh97', icon: 'github' },
    { title: 'linkedin', link: 'https://www.linkedin.com/in/tungthanh97/', icon: 'linkedin' },
    {
        title: 'facebook',
        link: 'https://www.facebook.com/profile.php?id=100014461512183',
        icon: 'facebook',
    },
    { title: 'discord', link: 'https://discord.com/users/519417766625804346', icon: 'discord' },
]) as ILinkItemWithIcon[];

export default contactItems;
