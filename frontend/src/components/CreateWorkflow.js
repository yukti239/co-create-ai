import React, { useState } from "react";
import API from "../services/api";

function CreateWorkflow({ refreshWorkflows }) {

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");

const handleSubmit = async (e) => {

e.preventDefault();

// Default steps (later AI will replace these)

const steps = [
{
stepNumber:1,
action:"Planning",
assignedTo:"User",
status:"pending"
},
{
stepNumber:2,
action:"Development",
assignedTo:"User",
status:"pending"
},
{
stepNumber:3,
action:"Testing",
assignedTo:"User",
status:"pending"
},
{
stepNumber:4,
action:"Deployment",
assignedTo:"User",
status:"pending"
}
];

try{

await API.post("/workflows",{
title,
description,
steps
});

setTitle("");
setDescription("");

refreshWorkflows();

}catch(err){
console.log(err);
}

};

return(

<div className="card">

<h3>Create Workflow</h3>

<form onSubmit={handleSubmit}>

<input
placeholder="Workflow Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
required
/>

<input
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
required
/>

<button type="submit">
Create Workflow
</button>

</form>

</div>

);

}

export default CreateWorkflow;