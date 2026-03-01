const authRoutes = require("./routes/authRoutes");
const workflowRoutes = require("./routes/workflowRoutes");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB error:", err));

app.use(cors());
app.use(express.json());

app.use("/api/workflows", workflowRoutes);

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.use("/api/workflows", workflowRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});