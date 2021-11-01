import Link from 'next/link';
import { ItemProjectType } from '@/types';

type ItemProjectProps = {
    project: ItemProjectType;
    index: number;
};

const ItemProject: React.FC<ItemProjectProps> = ({ project, index }) => {
    return (
        <li className="flex-col justify-around px-10 py-8 space-y-3 bg-gray-800 rounded-2xl">
            <div className="flex flex-col items-center space-x-5 space-y-5 md:flex-row md:space-y-0">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="items-center inline-block px-5 bg-gray-300 rounded-xl">
                    <div className="flex items-center h-10 space-x-5">
                        {project.technologies.map((techno) => {
                            switch (techno.name) {
                                case 'NextJS':
                                    return (
                                        <techno.icon
                                            key={`${techno.name}_${project.title}`}
                                            className="w-10 h-10"
                                        />
                                    );
                                case 'Jest':
                                    return (
                                        <techno.icon
                                            key={`${techno.name}_${project.title}`}
                                            className="w-6 h-6"
                                        />
                                    );
                                case 'Typescript':
                                    return (
                                        <techno.icon
                                            key={`${techno.name}_${project.title}`}
                                            className="w-6 h-6"
                                        />
                                    );
                                default:
                                    return (
                                        <techno.icon
                                            key={`${techno.name}_${project.title}`}
                                            className="w-5 h-5"
                                        />
                                    );
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center py-5 space-y-5 md:py-2 md:items-start">
                <p className="text-center md:text-left">{project.content}</p>
                <Link href={project.url}>
                    <a target="_blank" className="text-blue-300 transition duration-200 hover:text-blue-200">
                        Visit Site &rarr;
                    </a>
                </Link>
            </div>
        </li>
    );
};

export default ItemProject;
