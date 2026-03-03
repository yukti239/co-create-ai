require("dotenv").config();   // Load environment variables

const express = require("express");
const mongoose = require("mongoose");

const workflowRoutes = require("./routes/workflowRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB error:", err));

// Routes
app.use("/api/workflows", workflowRoutes);
app.use("/api/auth", authRoutes);

// Test Route (Optional)
app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});