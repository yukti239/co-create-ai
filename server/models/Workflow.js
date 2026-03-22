const mongoose = require("mongoose");

const workflowSchema = new mongoose.Schema(
{
  title: String,
  description: String,

  steps: [
    {
      action: String,
      status: {
        type: String,
        default: "pending"
      }
    }
  ]
},
{ timestamps: true }
);

module.exports = mongoose.model("Workflow", workflowSchema);