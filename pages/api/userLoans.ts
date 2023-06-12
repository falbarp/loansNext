import { NextApiRequest, NextApiResponse } from 'next';
import { default as pool } from '../../libs/postgres-db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    fav,
    deleted,
    loanId,
    userId,
    bank,
    title,
    amount,
    interest,
    months,
    description
  } = req.body;

  console.log(req.body);

  try {
    const client = await pool.connect();
    console.log (pool)
    console.log (client)
    console.log (req.body)
    await client.query(
      'INSERT INTO loanViewed (isFavourite, isDeleted, loanId, userId, bank, title, amount, interest, months, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);',
      [
        fav,
        deleted,
        loanId,
        userId,
        bank,
        title,
        amount,
        interest,
        months,
        description
      ]
    );

    client.release();

    return res.status(200).json({ message: 'User loans updated successfully' });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb'
    }
  }
};

export { handler };
