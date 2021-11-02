import type { NextApiRequest, NextApiResponse } from 'next';
import { getCurrentUserProfile } from '../../../lib/spotify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await getCurrentUserProfile();
    const data = await response.json();

    return res.status(200).json(data);
};
