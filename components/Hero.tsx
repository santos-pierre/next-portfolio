import Link from 'next/link';
const Hero = () => {
    return (
        <section className="flex flex-col items-center space-y-3 md:justify-around md:flex-row mt-7 md:mt-20">
            <div className="inline-block p-0.5 bg-white rounded-full bg-gradient-to-bl to-gray-500 from-red-500 transition hover:to-red-500 hover:from-gray-500">
                <div className="p-0.5 bg-black rounded-full ">
                    <img
                        src="/img/photo_profil.jpg"
                        alt="Santos Pierre"
                        className="rounded-full w-36 h-36 md:w-52 md:h-52"
                    />
                </div>
            </div>
            <div className="flex-col space-y-4">
                <div className="flex-col space-y-1">
                    <h1 className="text-3xl font-bold tracking-wide text-center md:text-left md:text-5xl">
                        Santos Pierre
                    </h1>
                    <h2 className="text-lg tracking-widest text-center md:text-2xl md:text-left">
                        Full-Stack Developer
                    </h2>
                </div>
                <div className="flex justify-center space-x-6 md:justify-start md:space-x-4">
                    <Link href="https://www.linkedin.com/in/pierre-santos-batista-84a80b194/">
                        <a className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">LinkedIn</span>
                            <svg
                                className="w-5 h-5 md:w-7 md:h-7"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </Link>
                    <Link href="https://github.com/santos-pierre">
                        <a className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Github</span>
                            <svg
                                className="w-5 h-5 md:w-7 md:h-7"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
