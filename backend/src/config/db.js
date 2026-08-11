// Import the promise-based MySQL client.
// This allows us to use async/await with MySQL.
const mysql = require("mysql2/promise");

// Create a MySQL connection pool.
//
// A connection pool keeps multiple database connections available
// so the application does not need to create a new connection
// for every database request.
const pool = mysql.createPool({
  // MySQL server address
  host: process.env.DB_HOST,

  // MySQL server port
  port: Number(process.env.DB_PORT),

  // Database name
  database: process.env.DB_NAME,

  // MySQL username
  user: process.env.DB_USER,

  // MySQL password
  password: process.env.DB_PASSWORD,

  // Maximum number of connections in the pool
  connectionLimit: 10,

  // Allow requests to wait when all connections are busy
  waitForConnections: true,

  // No limit on queued connection requests
  queueLimit: 0,
});

// Test the MySQL connection.
//
// This function is called when the backend starts.
// If MySQL is unavailable, the backend will not start.
const testDatabaseConnection = async () => {
  let connection;

  try {
    // Get one connection from the pool
    connection = await pool.getConnection();

    // Run a simple query to verify the database
    await connection.query("SELECT 1");

    console.log("MySQL database connected successfully");
  } catch (error) {
    // Display the actual database error
    console.error("MySQL database connection failed:");
    console.error(error.message);

    // Send the error back to server.js
    throw error;
  } finally {
    // Always release the connection back to the pool
    if (connection) {
      connection.release();
    }
  }
};

// Export the pool so other files can execute queries.
//
// Export testDatabaseConnection so server.js can verify
// the database before starting Express.
module.exports = {
  pool,
  testDatabaseConnection,
};