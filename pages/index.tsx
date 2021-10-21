import Experiences from '@/components/Experiences';
import Hero from '../components/Hero';
import BaseLayout from '../components/layout/BaseLayout';

const Home: React.FC = () => {
    return (
        <BaseLayout>
            <Hero />
            <Experiences />
        </BaseLayout>
    );
};

export default Home;
