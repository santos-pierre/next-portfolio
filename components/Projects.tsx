import { projects } from 'data';
import ListProjects from './ui/Cards/Projects/ListProjects';

const Projects = () => {
    return (
        <section className="my-5 md:my-20">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <ListProjects projects={projects} />
        </section>
    );
};

export default Projects;
