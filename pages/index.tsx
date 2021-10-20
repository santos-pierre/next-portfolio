import Hero from '../components/Hero';
import BaseLayout from '../components/layout/BaseLayout';

const Home: React.FC = () => {
    return (
        <BaseLayout>
            <Hero />
            <div className="max-w-xs mx-auto my-5 border-b border-white md:my-10 md:max-w-xl"></div>
        </BaseLayout>
    );
};

export default Home;
