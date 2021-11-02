import querystring from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    return response.json();
};

const CURRENT_USER_PROFILE = `https://api.spotify.com/v1/me`;
const CURRENT_PLAYING_TRACK = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getCurrentUserProfile = async () => {
    const { access_token } = await getAccessToken();

    return fetch(CURRENT_USER_PROFILE, {
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
        },
    });
};

export const getCurrentPlayingTrack = async () => {
    const { access_token } = await getAccessToken();

    return fetch(CURRENT_PLAYING_TRACK, {
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
        },
    });
};
