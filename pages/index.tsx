import Experiences from '@/components/Experiences';
import Projects from '@/components/Projects';
import Hero from '@/components/Hero';
import BaseLayout from '../components/layout/BaseLayout';

const Home: React.FC = () => {
    return (
        <BaseLayout>
            <Hero />
            <Experiences />
            <Projects />
        </BaseLayout>
    );
};

export default Home;
