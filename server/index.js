import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js"; // Ensure correct import for the database connection function

import { Admin } from "./models/Admin.js"; // Import Admin model if needed

dotenv.config();

const app = express();

// Middleware and route handling can be defined here

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Ensure database connection is established when the script starts
connectDB();
