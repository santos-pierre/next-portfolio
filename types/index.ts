import { FunctionComponent, SVGProps } from 'react';

type Technologie = {
    name: string;
    icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export type ItemExperienceType = {
    title: string;
    company?: string;
    content: string;
    technologies: Technologie[];
};

export type ItemProjectType = {
    title: string;
    content: string;
    url: string;
    technologies: Technologie[];
};
