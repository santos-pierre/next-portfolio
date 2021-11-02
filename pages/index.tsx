import Experiences from '@/components/Experiences';
import Projects from '@/components/Projects';
import Hero from '@/components/Hero';
import BaseLayout from '../components/layout/BaseLayout';
import SpotifyCurrentTrack from '@/components/SpotifyCurrentTrack';

const Home: React.FC = () => {
    return (
        <BaseLayout>
            <Hero />
            <Experiences />
            <Projects />
            <SpotifyCurrentTrack />
        </BaseLayout>
    );
};

export default Home;
