import { NextApiRequest, NextApiResponse } from 'next';
import { default as pool } from '../../libs/postgres-db'

const createTable = async () => {
    try {
      const client = await pool.connect();
      const query = `
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255),
          email VARCHAR(255),
          favs TEXT[]
        )
      `;
      await client.query(query);
      await insertRecords();
      client.release();
      console.log('Table created successfully!');
    } catch (error) {
      console.error('Error creating table:', error);
    }
  };
  
  const insertRecords = async () => {
    try {
      const client = await pool.connect();
      const query = `
        INSERT INTO users (name, email, favs)
        VALUES 
          ('John Doe', 'john@example.com', '{"47dfd2a4df8b202babb8f6c","647dfd2a4df8b202babb8f6b","647dfd2a4df8b202babb8f69"}'),
          ('Jane Smith', 'jane@example.com', '{}')
      `;
      await client.query(query);
      client.release();
      console.log('Records inserted successfully!');
    } catch (error) {
      console.error('Error inserting records:', error);
    }
  };
  


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    createTable();
   
  res.status(200).json({ message: 'DB Polluted' });
}