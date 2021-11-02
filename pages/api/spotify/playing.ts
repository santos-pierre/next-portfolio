import type { NextApiRequest, NextApiResponse } from 'next';
import { getCurrentPlayingTrack } from '../../../lib/spotify';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
    const response = await getCurrentPlayingTrack();
    if (response.status === 204) {
        return res.status(200).json({ message: 'Not PLaying', is_playing: false });
    }

    if (response.status === 200) {
        const { item, is_playing } = await response.json();
        const artists = item.artists.map(
            (artist: { href: string; name: string; uri: string; external_urls: any; id: string }) => {
                return {
                    app_spotify: artist.uri,
                    web_spotify: artist.external_urls['spotify'] ? artist.external_urls['spotify'] : null,
                    name: artist.name,
                    id: artist.id,
                };
            }
        );
        return res
            .status(200)
            .json({ title: item.name, title_uri: item.uri, album: item.album.name, artists, is_playing });
    }

    if (!response.ok) {
        const { error } = await response.json();
        return res.status(error.status).json(error);
    }
};
