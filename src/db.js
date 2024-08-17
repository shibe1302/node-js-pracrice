
import mysql from 'mysql2/promise';

const connection1 =   mysql.createConnection({
    host: 'localhost',
    port:3307,
    user: 'root',
    password: '123456' ,
    database: 'shiba',
  });
    try {
  const [results, fields] = await connection1.query(
    'SELECT * from items'
  );
  console.log(results); // results contains rows returned by server
  console.log(fields)
    } catch (error) {
      console.log(error)
    }