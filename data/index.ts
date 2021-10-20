import LaravelIcon from '../components/ui/icons/LaravelIcon';
import VueIcon from '../components/ui/icons/VueIcon';
import WordpressIcon from '../components/ui/icons/Wordpress';
import { ItemExperienceType } from '../types';

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
            'E-commerce for customizing clothing. My mission in this project was to manage the plugin to choose all the variants of an article. And also adds the products.',
        technologies: [{ name: 'Wordpress', icon: WordpressIcon }],
    },
];
