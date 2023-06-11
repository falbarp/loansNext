import { NextApiRequest, NextApiResponse } from 'next';
import { default as pool } from '../../libs/postgres-db'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method !== 'PUT') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    const { userId, newFavs } = req.body;
  
    try {
      const client = await pool.connect();
      await client.query(
        'UPDATE users SET favs = ARRAY_APPEND(favs, $1) WHERE id = $2',
        [newFavs, userId]
      );
  
      client.release();
  
      return res.status(200).json({ message: 'User favs updated successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  
  export const config = {
    api: {
      bodyParser: {
        sizeLimit: '1mb',
      },
    },
  };
  
  export { handler };
  