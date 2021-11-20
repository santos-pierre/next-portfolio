import SpotifyIcon from '../icons/SpotifyLogo';

const SpotifyNullState = () => {
    return (
        <div className="relative mx-7 md:mx-0">
            <div className="relative flex items-center w-auto h-24 px-5 bg-gray-900 rounded-lg space-x-7 md:w-96">
                <SpotifyIcon className="w-10 h-10 md:w-12 md:h-12" />
                <div className="flex items-center flex-grow pl-5">
                    <span className="font-light">Not Playing</span>
                </div>
            </div>
        </div>
    );
};

export default SpotifyNullState;
