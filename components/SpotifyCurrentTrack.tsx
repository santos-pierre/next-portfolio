import SpotifyIcon from './ui/icons/SpotifyLogo';
import useSWR from 'swr';
import SpotifyLoadingState from './ui/spotify/SpotifyLoadingState';
import SpotifyNullState from './ui/spotify/SpotifyNullState';

const fetcher = (...args: [any]) => fetch(...args).then((res) => res.json());

const SpotifyCurrentTrack = () => {
    // const { data, error } = useSWR('/api/spotify/playing', fetcher);

    // if (error) {
    //     return (
    //         <SpotifyNullState />
    //     );
    // }

    // if (!data) {
    //     return <SpotifyLoadingState />;
    // }

    // if (!data.is_playing) {
    //     return <SpotifyNullState />;
    // }

    // return (
    //     <div className="relative">
    //         <div className="absolute inset-0 bg-green-600 rounded-lg w-96 blur-md"> </div>
    //         <div className="relative flex items-center h-24 px-5 space-x-5 bg-gray-900 rounded-lg w-96">
    //             <SpotifyIcon className="w-16 h-16" />
    //             <div>
    //                 <p>Not Playing</p>
    //             </div>
    //         </div>
    //     </div>
    // );
    return <SpotifyNullState />;
};

export default SpotifyCurrentTrack;
