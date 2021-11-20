import Experiences from '@/components/Experiences';
import Projects from '@/components/Projects';
import Hero from '@/components/Hero';
import BaseLayout from '../components/layout/BaseLayout';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
    return (
        <BaseLayout>
            <Hero />
            <Experiences />
            <Projects />
            <Footer />
        </BaseLayout>
    );
};

export default Home;
