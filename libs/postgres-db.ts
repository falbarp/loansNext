import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: 'loans',
  port: 5432, // the default PostgreSQL port
});

export default pool;
