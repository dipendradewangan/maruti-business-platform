const express = require("express");
const cors = require("cors");
const app = express();
const { pool } = require("./config/db");

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
}));


// app.get("/", (req, res) => {
//     res.json({
//         success : true,
//         message: "Welcome to the Maruti Business Platform",
//         timestamp: new Date().toISOString(),

//     })
// });




app.get("/api/health", async (req, res) => {
    try {
        const [result] = await pool.query("SELECT 1 AS database_status");

        res.status(200).json({
            success: true,
            message: "Maruti Business Platform API is running",
            database: "connected",
            databaseStatus: result[0].database_status,
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        res.status(503).json({
            success: false,
            message: "API is running but database connection failed",
            database: "disconnected",
            error: error.message,
        });
    }
});

module.exports = app;   