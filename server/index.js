const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const workflowRoutes = require("./routes/workflowRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/workflows", workflowRoutes);

// CONNECT DB + START SERVER
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });

  })
  .catch(err => console.log(err));