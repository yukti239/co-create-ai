const mongoose = require("mongoose");

const WorkflowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  steps: [
    {
      stepNumber: Number,
      action: String,
      assignedTo: String,
      status: {
        type: String,
        default: "pending",
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Workflow", WorkflowSchema);