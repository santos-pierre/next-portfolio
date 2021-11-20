import Head from 'next/head';

const BaseLayout: React.FC = ({ children }) => {
    return (
        <>
            <Head>
                {/* <!-- Primary Meta Tags --> */}
                <title>Santos Pierre</title>
                <meta name="title" content="Santos Pierre" />
                <meta
                    name="description"
                    content="Santos Pierre - Full-Stack Developer I like to carry out my projects and learn every day, not hesitating to question myself to progress. Next.JS, Laravel & GraphQL enthusiast."
                />
                <link rel="icon" href="/img/logo.png" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.santospierre.com/" />
                <meta property="og:title" content="Santos Pierre" />
                <meta
                    property="og:description"
                    content="Santos Pierre - Full-Stack Developer I like to carry out my projects and learn every day, not hesitating to question myself to progress. Next.JS, Laravel & GraphQL enthusiast."
                />
                <meta property="og:image" content="/img/photo_profil.jpg" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.santospierre.com/" />
                <meta property="twitter:title" content="Santos Pierre" />
                <meta
                    property="twitter:description"
                    content="Santos Pierre - Full-Stack Developer I like to carry out my projects and learn every day, not hesitating to question myself to progress. Next.JS, Laravel & GraphQL enthusiast."
                />
                <meta property="twitter:image" content="/img/photo_profil.jpg" />
            </Head>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">{children}</div>
            </div>
        </>
    );
};

export default BaseLayout;
