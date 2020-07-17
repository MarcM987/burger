var mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Marc987987!!12",
    database: "burgers_db"
  });
}

// connection = mysql.createConnection({
//   host: "x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   user: "iiz14aqw3sewuuzt",
//   password: "jqua32gg026oehzm",
//   port: 3306,
//   database: "xa24yal39g5l9jc5"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;