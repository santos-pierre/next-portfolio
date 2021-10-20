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
                {/* <ul className="grid grid-cols-1 my-5 md:grid-cols-3">
                    <li className="p-1 overflow-hidden rounded-lg bg-gradient-to-br to-red-500 from-red-300 h-96">
                        <div className="flex flex-col justify-center h-full px-2 space-y-2 bg-gray-900 rounded-lg">
                            <div>
                                <h3 className="text-lg font-medium tracking-wide text-center">
                                    E-Learning Platform
                                </h3>
                                <h4 className="text-sm font-light tracking-widest text-center">@MolenGeek</h4>
                            </div>
                            <p className="px-3 text-base">
                                Platform to simplify the workflow of the coaches by letting them create the
                                roadmaps and content of their courses. In the other parts, the students
                                participated in the lesson and achieved quizzes to go further in the
                                internship. We build the platform with Laravel and VueJS components
                            </p>
                            <div className="flex justify-center space-x-4">
                                <LaravelIcon className="w-10 h-10 text-red-500" />
                                <VueIcon className="w-10 h-10" />{' '}
                            </div>
                        </div>
                    </li>
                </ul> */}
            </section>
        </BaseLayout>
    );
};

export default Home;
