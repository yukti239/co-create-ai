require("dotenv").config();

console.log("MONGO URI:", process.env.MONGO_URI);
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const workflowRoutes = require("./routes/workflowRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.use("/api/workflows", workflowRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});