require("dotenv").config();
const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const Workflow = require("../models/Workflow");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// CREATE WORKFLOW
router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    // Call OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a workflow automation assistant." },
        { role: "user", content: prompt }
      ],
    });

    const aiReply = response.choices[0].message.content;

    // Save to MongoDB
    const newWorkflow = new Workflow({
      prompt,
      response: aiReply
    });

    await newWorkflow.save();

    res.json({ success: true, data: newWorkflow });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// GET ALL WORKFLOWS
router.get("/", async (req, res) => {
  const workflows = await Workflow.find();
  res.json(workflows);
});

module.exports = router;