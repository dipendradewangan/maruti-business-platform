// =========================================================
// Database Configuration
// =========================================================


// Import MySQL2 promise API.
// Promise API allows us to use async/await
const mysql = require("mysql2/promise");


// Load environment variables.
require("dotenv").config();



// =========================================================
// Database Configuration
// =========================================================

// Database configuration comes from the .env file.
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 3306;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;



// =========================================================
// Create Database
// =========================================================
//
// This connection does NOT specify a database.
//
// Why?
// Because the database may not exist yet.
//
// Example:
// If maruti_business_platform does not exist,
// we cannot connect directly to that database.
//
// So first we connect to MySQL Server itself,
// create the database if required,
// and then create our application connection pool.
// =========================================================


const createDatabaseIfNotExists = async () => {
  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
  });

  try {
    await connection.query(`
      CREATE DATABASE IF NOT EXISTS ${DB_NAME}
      CHARACTER SET utf8mb4
      COLLATE utf8mb4_general_ci
      `);

    console.log(`Database ${DB_NAME} is ready`);
  }
  finally {
    await connection.end()
  }


}




// =========================================================
// Application Connection Pool
// =========================================================
//
// This pool is created AFTER the database exists.
//
// The entire application will use this pool for
// database queries.
// =========================================================

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,

  // Keep connections available for reuse.
  waitForConnections: true,

  // Maximum number of simultaneous connections.
  connectionLimit: 10,

  // Allow unlimited queued requests.
  queueLimit: 0,
});




// =========================================================
// Test Database Connection
// =========================================================

const testDatabaseConnection = async () => {

  // Get one connection from the pool.
  const connection = await pool.getConnection();

  try {

    console.log(
      "MySQL database connection successful."
    );

  } finally {

    // Return connection back to the pool.
    connection.release();
  }
};



// =========================================================
// Export Database Functions
// =========================================================

module.exports = {
  createDatabaseIfNotExists,
  pool,
  testDatabaseConnection
};