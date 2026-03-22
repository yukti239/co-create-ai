const express = require("express");
const router = express.Router();
const Workflow = require("../models/Workflow");


// ✅ CREATE
router.post("/", async (req, res) => {
  try {

    const workflow = new Workflow(req.body);
    await workflow.save();

    res.json(workflow);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});


// ✅ GET ALL
router.get("/", async (req, res) => {
  try {

    const workflows = await Workflow.find().sort({ createdAt: -1 });
    res.json(workflows);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});


// ✅ UPDATE (checkbox)
router.put("/:id", async (req, res) => {
  try {

    const updated = await Workflow.findByIdAndUpdate(
      req.params.id,
      { steps: req.body.steps },
      { new: true }
    );

    res.json(updated);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});


// ✅ DELETE
router.delete("/:id", async (req, res) => {
  try {

    const deleted = await Workflow.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Workflow not found" });
    }

    res.json({ message: "Deleted successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;