import { NextApiRequest, NextApiResponse } from 'next';
import { default as pool } from '../../libs/postgres-db'


const createTable = async () => {
  if (process.env.NODE_ENV != 'development') return null
    try {
      const client = await pool.connect();
      
      const query = `
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255),
          email VARCHAR(255),
          password VARCHAR(255)
        );
      `;
      await client.query(query);
      await createViewedTable();
      await insertRecords();
      client.release();
      console.log('Table created successfully!');
    } catch (error) {
      console.error('Error creating table:', error);
    }
  };

   const createViewedTable = async () => {
    try {
      const client = await pool.connect();
      
      const query = `
        CREATE TABLE loanViewed (
          id SERIAL PRIMARY KEY,
          isFavourite BOOLEAN,
          isDeleted BOOLEAN,
          userId SERIAL,
          loanId VARCHAR(255),
          bank VARCHAR(255),
          title VARCHAR(255),
          amount INT,
          interest float,
          months INT,
          description VARCHAR(255),           
          viewedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (userId) REFERENCES users(id)
        );
      `;
      await client.query(query);
      client.release();
      console.log('Table for views created successfully!');
    } catch (error) {
      console.error('Error creating table:', error);
    }
  };
  
  const insertRecords = async () => {
    try {
      const client = await pool.connect();
      const query = `
        INSERT INTO users (name, email, password)
        VALUES 
          ('John Doe', 'john@example.com', '123456'),
          ('Jane Smith', 'jane@example.com', '123456')
      `;
      await client.query(query);
      client.release();
      console.log('Records inserted successfully!');
    } catch (error) {
      console.error('Error inserting records:', error);
    }
  };
  


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    createTable();   
    res.status(200).json({ message: 'DB Polluted' })
}
  catch (error) {
    return res.status(500).json({ error });
  }
}