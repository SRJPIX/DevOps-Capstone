
const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Health check endpoint
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Application is running successfully"
    });
});

// Application version endpoint
app.get("/api/version", (req, res) => {
    res.status(200).json({
        version: process.env.APP_VERSION || "1.0.0",
        application: "DevOps Student Portal"
    });
});

// Export for testing and server startup
module.exports = app;
