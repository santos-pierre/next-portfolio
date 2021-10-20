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
