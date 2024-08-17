const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 6969
const path = require('path')
const hostname = 'localhost'
const configViewEngine=require('./config/viewEngine.js')
const webRoutes=require('./routes/web.js')



//config app
configViewEngine(app)



app.use('',webRoutes);
app.listen(port,hostname,() => {
  console.log(`Example app listening on port ${port}`)
})


const mysql = require('mysql2/promise'); // Example using mysql2

// const connection =  mysql.createConnection({
//   host: 'localhost',
//   port:3307,
//   user: 'root',
//   password: '123456' ,
//   database: 'shiba',
// });



// A simple SELECT query
// try {
//   const [results, fields] =  connection.query(
//     'SELECT * FROM items'
//   );
//   console.log(results); // results contains rows returned by server
//   console.log(fields); // fields contains extra meta data about results, if available
// } catch (err) {
//   console.log(err);
// }
//==========================================================
const connection1 =   mysql.createConnection({
  host: 'localhost',
  port:3307,
  user: 'root',
  password: '123456' ,
  database: 'shiba',
});
  try {
const [results, fields] =  connection1.query(
  'SELECT * from items'
);
console.log(results); // results contains rows returned by server
console.log(fields)
  } catch (error) {
    console.log(error)
  }
//===============


// const connection = await mysql.createConnection({
//   host: 'localhost',
//   port:3307,
//   user: 'root',
//   password: '123456' ,
//   database: 'shiba',
// });

// // A simple SELECT query
// try {
//   const [results, fields] = await connection.query(
//     'SELECT * from items'
//   );

//   console.log(results); // results contains rows returned by server
//   console.log(fields); // fields contains extra meta data about results, if available
// } catch (err) {
//   console.log(err);
// }





// async function queryDatabase() {
//   const pool = mysql.createPool({
//   host: 'localhost',
//   port:3307,
//   user: 'root',
//   password: '123456' ,
//   database: 'shiba',
//   });

//   try {
//     const [rows, fields] = await pool.query('SELECT * FROM items');
//     console.log(rows);
//   } catch (error) {
//     console.error('Error executing query:', error);
//   } finally {
//     pool.end();
//   }
// }

// queryDatabase();