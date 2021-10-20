import Hero from '../components/Hero';
import BaseLayout from '../components/layout/BaseLayout';

const Home: React.FC = () => {
    return (
        <BaseLayout>
            <Hero />
        </BaseLayout>
    );
};

export default Home;