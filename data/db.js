const mysql = require('mysql2')

const connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: '2828',
  database: 'blog',
  port: 3306

})

connection.connect((err) => {
  if (err) throw err;

  console.log('Connesso a MySQL');

})

module.exports = connection