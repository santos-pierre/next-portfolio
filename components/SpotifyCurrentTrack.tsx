import SpotifyIcon from './ui/icons/SpotifyLogo';
import useSWR from 'swr';
import SpotifyLoadingState from './ui/spotify/SpotifyLoadingState';
import SpotifyNullState from './ui/spotify/SpotifyNullState';

const fetcher = (...args: [any]) => fetch(...args).then((res) => res.json());

const getArtistName = (
    artists: { href: string; name: string; uri: string; external_urls: any; id: string }[]
) => {
    const artistsName = artists.map((artist) => {
        return artist.name;
    });

    return artistsName.join(',');
};

const SpotifyCurrentTrack = () => {
    const { data, error } = useSWR('/api/spotify/playing', fetcher);

    if (error) {
        return <SpotifyNullState />;
    }

    if (!data) {
        return <SpotifyLoadingState />;
    }

    if (!data.is_playing) {
        return <SpotifyNullState />;
    }

    return (
        <div className="relative mx-7 md:mx-0">
            <div className="absolute inset-0 bg-green-600 rounded-lg md:w-96 blur-md animate-tilt"> </div>
            <div className="relative flex items-center h-24 px-5 bg-gray-900 rounded-lg space-x-7 md:w-96">
                <SpotifyIcon className="w-16 h-16" />
                <div className="flex flex-col w-60">
                    <p className="font-semibold truncate">{getArtistName(data.artists)}</p>
                    <p className="truncate">{data.title}</p>
                    <p className="text-sm font-light truncate">{data.album}</p>
                </div>
            </div>
        </div>
    );
};

export default SpotifyCurrentTrack;
