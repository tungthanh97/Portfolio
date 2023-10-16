import { ILinkItemWithIcon } from '@package/lib/types/common';
import EmailIcon from '@assets/icons/mail-line.svg';
import GithubIcon from '@assets/icons/github-line.svg';
import LinkedinIcon from '@assets/icons/linkedin-line.svg';
import FacebookIcon from '@assets/icons/facebook-line.svg';
import DiscordIcon from '@assets/icons/discord-line.svg';

const contactItems = Object.freeze([
    {
        title: 'email',
        link: 'mailTo:tung020197@gmail.com',
        icon: <EmailIcon />,
    },
    { title: 'github', link: 'https://github.com/tungthanh97', icon: <GithubIcon /> },
    { title: 'linkedin', link: 'https://www.linkedin.com/in/tungthanh97/', icon: <LinkedinIcon /> },
    {
        title: 'facebook',
        link: 'https://www.facebook.com/profile.php?id=100014461512183',
        icon: <FacebookIcon />,
    },
    {
        title: 'discord',
        link: 'https://discord.com/users/519417766625804346',
        icon: <DiscordIcon />,
    },
]) as ILinkItemWithIcon[];

export default contactItems;
