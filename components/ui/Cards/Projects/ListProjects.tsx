import { ItemProjectType } from '@/types';
import ItemProject from './ItemProject';

type ListProjectsProps = {
    projects: ItemProjectType[];
};

const ListProjects: React.FC<ListProjectsProps> = ({ projects }) => {
    return (
        <ul className="my-16 space-y-10 mx-7 md:mx-0">
            {projects.map((project, index) => {
                return <ItemProject project={project} index={index} />;
            })}
        </ul>
    );
};

export default ListProjects;
