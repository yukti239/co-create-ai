const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const workflowRoutes = require("./routes/workflowRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/workflows", workflowRoutes);

// Use dynamic port (IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 5000;

// Connect DB and then start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });