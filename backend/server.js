// Load environment variables from the .env file
require("dotenv").config();

// Import the MySQL database connection test function
const { testDatabaseConnection } = require("./src/config/db");


// Import the Express application
const app = require("./src/app");


const PORT = process.env.PORT || 5000;

const startServer = async ()=>{
    try{
        // Test the database connection before starting the server
        await testDatabaseConnection();

        // Start the server
        app.listen(PORT, ()=>{
            console.log(`Server is running on the port ${PORT}`);
        })
    }
    catch(error){
        // stop startup if database connection fails
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
}

// initialize the backend server
startServer();

// app.listen(process.env.PORT, ()=>{
//     console.log("Server is running on port " + process.env.PORT);
// })