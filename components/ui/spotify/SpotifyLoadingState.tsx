import SpotifyIcon from '../icons/SpotifyLogo';

const SpotifyLoadingState = () => {
    return (
        <div className="relative mx-7 md:mx-0">
            <div className="absolute inset-0 bg-green-600 rounded-lg md:w-96 blur-md animate-scale"></div>
            <div className="relative flex items-center w-auto h-24 px-5 bg-gray-900 rounded-lg space-x-7 md:w-96">
                <SpotifyIcon className="w-10 h-10 md:w-12 md:h-12" />
                <div className="flex items-center flex-grow pl-5">
                    <svg
                        className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    <span className="font-light animate-pulse">Loading</span>
                </div>
            </div>
        </div>
    );
};

export default SpotifyLoadingState;
