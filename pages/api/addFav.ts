import { NextApiRequest, NextApiResponse } from 'next';
import { default as pool } from '../../libs/postgres-db'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    const { loanId, userId, fav  } = req.body;
  
    try {
      const client = await pool.connect();
      await client.query(
        'INSERT INTO loanViewed (loanId, userId,isFavourite) VALUES ($1, $2, $3) ON CONFLICT (userId) DO UPDATE SET loanId = excluded.loanId;',
        [loanId, userId, fav]
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
  