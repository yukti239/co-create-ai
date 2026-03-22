import React, { useState } from "react";
import API from "../services/api";

function CreateWorkflow({ reload }) {

  const [input, setInput] = useState("");

  const handleSubmit = async () => {

    const steps = [

      { stepNumber:1, action:"Requirement Analysis", status:"pending" },
      { stepNumber:2, action:"Data Collection", status:"pending" },
      { stepNumber:3, action:"Data Cleaning", status:"pending" },
      { stepNumber:4, action:"Model Development", status:"pending" },
      { stepNumber:5, action:"Backend API Development", status:"pending" },
      { stepNumber:6, action:"Frontend Integration", status:"pending" },
      { stepNumber:7, action:"Testing", status:"pending" },
      { stepNumber:8, action:"Deployment", status:"pending" }

    ];

    await API.post("/workflows", {

      title: input,
      description: "AI Generated Workflow",
      steps

    });

    reload();

    setInput("");

  };

  return (

    <div className="card">

      <h3>Create AI Workflow</h3>

      <input
        placeholder="Example: Build AI Chatbot"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Generate Workflow
      </button>

    </div>

  );

}

export default CreateWorkflow;