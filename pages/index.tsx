import Hero from '../components/Hero';
import BaseLayout from '../components/layout/BaseLayout';
import ListExperiences from '../components/ui/Cards/Experiences/ListExperiences';
import { experiences } from '../data';

const Home: React.FC = () => {
    return (
        <BaseLayout>
            <Hero />
            <section className="my-5 md:my-20">
                <h2 className="text-3xl font-semibold">Experiences</h2>
                <ListExperiences experiences={experiences} />
            </section>
        </BaseLayout>
    );
};

export default Home;
