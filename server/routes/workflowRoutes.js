const express = require("express");
const router = express.Router();
const Workflow = require("../models/Workflow");

// ✅ Create a new workflow
router.post("/", async (req, res) => {
  try {
    const { title, description, steps } = req.body;

    const newWorkflow = new Workflow({
      title,
      description,
      steps,
    });

    await newWorkflow.save();

    res.status(201).json(newWorkflow);
  } catch (error) {
    res.status(500).json({ message: "Error creating workflow" });
  }
});

// ✅ Get all workflows
router.get("/", async (req, res) => {
  try {
    const workflows = await Workflow.find();
    res.status(200).json(workflows);
  } catch (error) {
    res.status(500).json({ message: "Error fetching workflows" });
  }
});

module.exports = router;