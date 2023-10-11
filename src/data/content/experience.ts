import { IExperienceItem } from '@components/ExperienceTimeline/type';

export const experienceContent: Array<IExperienceItem> = [
    {
        id: '1',
        title: 'Software Engineer',
        company: 'Zuellig Pharma',
        date: 'Mar 2023 - Present',
        icon: 'fpt.svg',
        tags: ['Next.js', 'Docker', 'Tailwind', 'TypeScript', 'GraphQL', 'Apollo', 'i18n'],
        descriptions: [
            'Proposed and implemented a center login domain and landing page that provide secure access to subdomains',
            'Seamlessly integrated various subdomains, tailored to different business functions, ensuring authentication was only required at the central hub',
        ],
    },
    {
        id: '2',
        title: 'Software Engineer',
        company: 'Cerebral',
        date: 'Oct 2021 - Mar 2023',
        icon: 'fpt.svg',
        tags: [
            'Next.js',
            'Reactjs',
            'Styled Component',
            'Jest',
            'React testing library',
            'TypeScript',
            'REST',
            'Rails',
            'AWS',
            'ABTest',
            'Datadog',
            'Cypress',
        ],
        descriptions: [
            'Built an interactive marketing website that prioritized user-friendliness, SEO optimization',
            'Developed and maintained authentication and versatile onboarding flows, customized to cater to diverse user groups, ensuring a tailored and user-centric experience.',
        ],
    },
    {
        id: '3',
        title: 'Software Engineer',
        company: 'MetaHall',
        date: 'Mar 2021 - Oct 2021',
        icon: 'fpt.svg',
        tags: ['Reactjs', 'TypeScript', 'GraphQL', 'Apollo', 'Antd', 'Redux', 'Redux toolkit'],
        descriptions: [
            'Created a captivating, responsive web application for selling tickets, designed with meticulous attention to detail for pixel-perfect visuals.',
            'Built a content management system (CMS) for effortless control over website content.',
        ],
    },
    {
        id: '4',
        title: 'Software Engineer',
        company: 'Personal Finance Management',
        date: 'Aug 2020 - Feb 2021',
        tags: [
            'React',
            'Gasby',
            'React Native',
            'TypeScript',
            'Axios',
            'REST',
            'SCSS',
            'React router',
            'Redux',
        ],
        icon: 'fpt.svg',
        descriptions: [
            'Developed a mobile application for managing personal finances, with a focus on user experience and intuitive design.',
        ],
    },
    {
        id: '5',
        title: 'Bachelor of Engineering \n (Automotive Engineering)',
        company: 'Hanoi University of Science and Technology',
        date: 'Sep 2015 - Jun 2020',
        tags: ['Network', 'C', 'Java', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'SQL'],
        icon: 'hust.svg',
        descriptions: [
            'Collaborated with other students and professors to research and develop new technologies for the university.',
        ],
    },
];