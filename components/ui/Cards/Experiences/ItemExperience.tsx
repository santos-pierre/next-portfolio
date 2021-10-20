import { ItemExperienceType } from '../../../../types';

type ItemExperienceProps = {
    experience: ItemExperienceType;
};
const ItemExperience: React.FC<ItemExperienceProps> = ({ experience }) => {
    return (
        <li className="p-1 overflow-hidden rounded-lg bg-gradient-to-br to-red-500 from-red-300 h-96">
            <div className="flex flex-col h-full px-2 space-y-2 bg-gray-900 rounded-lg">
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
                                return <techno.icon className="w-10 h-10 text-red-500" />;
                            default:
                                return <techno.icon className="w-10 h-10" />;
                        }
                    })}
                </div>
            </div>
        </li>
    );
};

export default ItemExperience;
