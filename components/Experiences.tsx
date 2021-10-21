import ListExperiences from './ui/Cards/Experiences/ListExperiences';
import { experiences } from 'data';

const Experiences = () => {
    return (
        <section className="my-5 md:my-20">
            <h2 className="text-3xl font-semibold">Experiences</h2>
            <ListExperiences experiences={experiences} />
        </section>
    );
};

export default Experiences;
