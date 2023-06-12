import { NextApiRequest, NextApiResponse } from 'next';
import { default as pool } from '../../libs/postgres-db'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    const { name, email } = req.body;
  
    try {
      const client = await pool.connect();
      console.log (client)
      await client.query(
        `INSERT INTO users (name, email) VALUES ($1, $2);`,
        [name, email]
      );
  
      client.release();
  
      return res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
      return res.status(500).json({error });
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
  