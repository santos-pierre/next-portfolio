import JestIcon from '@/components/ui/icons/JestIcon';
import LaravelIcon from '@/components/ui/icons/LaravelIcon';
import NextIcon from '@/components/ui/icons/NextIcon';
import TailwindIcon from '@/components/ui/icons/TailwindIcon';
import TwitchIcon from '@/components/ui/icons/TwithcIcon';
import TypescriptIcon from '@/components/ui/icons/TypescriptIcon';
import VueIcon from '@/components/ui/icons/VueIcon';
import WordpressIcon from '@/components/ui/icons/Wordpress';
import { ItemExperienceType, ItemProjectType } from '@/types';

export const experiences: ItemExperienceType[] = [
    {
        title: 'E-learning platform',
        company: 'MolenGeek',
        content:
            'Platform to simplify the workflow of the coaches by letting them create the roadmaps and content of their courses. In the other parts, the students participated in the lesson and achieved quizzes to go further in the internship. We build the platform with Laravel and VueJS components.',
        technologies: [
            { name: 'Laravel', icon: LaravelIcon },
            { name: 'Vue', icon: VueIcon },
        ],
    },
    {
        title: 'K-DO',
        company: 'K-DO',
        content:
            'E-commerce for customizing clothing. My mission in this project was to manage the plugin to choose all the variants of an article. And also adds the products. We build it with Wordpress. Create Videos for the cutomer to teach him how to use the site.',
        technologies: [{ name: 'Wordpress', icon: WordpressIcon }],
    },
    {
        title: 'Tyres E-Commerce',
        company: 'MolenGeek',
        content:
            'Building E-Commerce from A to Z, speaking with the client to get the details, to create a site that corresponds to him. Used WordPress combined with the Shopify plugin for the products and the payments with Stripe.',
        technologies: [{ name: 'Wordpress', icon: WordpressIcon }],
    },
];

export const projects: ItemProjectType[] = [
    {
        url: 'https://games.santospierre.com/',
        technologies: [
            { name: 'NextJS', icon: NextIcon },
            { name: 'Twitch', icon: TwitchIcon },
            { name: 'Tailwind', icon: TailwindIcon },
        ],
        title: 'Video Game Aggregator',
        content:
            'On the site, you can see popular, fresh reviewed and coming soon games. Willing to train my self build a site with NextJS for testing the ISR and fetching the data from the Twitch API. Design with TailwindCSS.',
    },
    {
        url: 'https://tic-tac-toe.santospierre.com/',
        technologies: [
            { name: 'Typescript', icon: TypescriptIcon },
            { name: 'Jest', icon: JestIcon },
            { name: 'Tailwind', icon: TailwindIcon },
        ],
        title: 'Tic Tac Toe',
        content:
            'Developing a Tic Tac Toe to have basic knowledge with Typescript and Jest for testing. Also played with Dark Mode with TailwindCSS.',
    },
];
