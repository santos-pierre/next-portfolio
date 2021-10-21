import { ItemExperienceType } from '@/types';

type ItemExperienceProps = {
    experience: ItemExperienceType;
    index: number;
};

export const getGradient = (index: number): string => {
    switch (index) {
        case 0:
            return 'bg-gradient-to-br to-red-800 from-red-300';
        case 1:
            return 'bg-gradient-to-tr to-yellow-500 from-yellow-100';
        case 2:
            return 'bg-gradient-to-br to-indigo-800 from-indigo-300';
        default:
            return 'bg-gradient-to-br to-red-800 from-red-300';
    }
};

const ItemExperience: React.FC<ItemExperienceProps> = ({ experience, index }) => {
    return (
        <li
            className={`p-0.5 overflow-hidden rounded-lg md:h-96 mx-7 md:mx-0 ${getGradient(
                index
            )} bg-yellow-800`}
        >
            <div className="flex flex-col h-full p-3 px-2 space-y-2 bg-gray-900 rounded-lg">
                <div>
                    <h3 className="text-lg font-medium tracking-wide text-center">{experience.title}</h3>
                    {experience.company && (
                        <h4 className="text-sm font-light tracking-widest text-center">
                            @{experience.company}
                        </h4>
                    )}
                </div>
                <p className="px-3 text-base">{experience.content}</p>
                <div className="flex items-end justify-center h-full pb-5 space-x-4">
                    {experience.technologies.map((techno) => {
                        switch (techno.name) {
                            case 'Laravel':
                                return (
                                    <techno.icon
                                        key={`${techno.name}_${experience.title}`}
                                        className="w-10 h-10 text-red-500"
                                    />
                                );
                            default:
                                return (
                                    <techno.icon
                                        key={`${techno.name}_${experience.title}`}
                                        className="w-10 h-10"
                                    />
                                );
                        }
                    })}
                </div>
            </div>
        </li>
    );
};

export default ItemExperience;
