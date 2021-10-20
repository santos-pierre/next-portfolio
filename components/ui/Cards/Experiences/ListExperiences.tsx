import { ItemExperienceType } from '../../../../types';
import ItemExperience from './ItemExperience';

type ListExperiencesProps = {
    experiences: ItemExperienceType[];
};

const ListExperiences: React.FC<ListExperiencesProps> = ({ experiences }) => {
    return (
        <ul className="grid grid-cols-1 my-5 md:grid-cols-3 md:gap-x-5 gap-y-5">
            {experiences.map((experience) => {
                return <ItemExperience key={experience.title} experience={experience} />;
            })}
        </ul>
    );
};

export default ListExperiences;
