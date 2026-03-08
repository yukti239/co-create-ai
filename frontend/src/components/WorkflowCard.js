import React, { useState } from "react";

function WorkflowCard({ workflow }) {

const [steps,setSteps] = useState(workflow.steps);

const toggleStep = (index) => {

const updated = [...steps];

updated[index].status =
updated[index].status === "completed"
? "pending"
: "completed";

setSteps(updated);

};

const completed = steps.filter(
step => step.status === "completed"
).length;

const progress = Math.round(
(completed / steps.length) * 100
);

return(

<div className="card">

<h3>{workflow.title}</h3>

<p>{workflow.description}</p>

{steps.map((step,index)=>(
<div key={index}>

<input
type="checkbox"
checked={step.status==="completed"}
onChange={()=>toggleStep(index)}
/>

<span style={{marginLeft:"10px"}}>
{step.action}
</span>

</div>
))}

<p style={{marginTop:"10px"}}>

Progress: {progress}%

</p>

<div className="progressBar">

<div
className="progressFill"
style={{width:`${progress}%`}}
>

</div>

</div>

</div>

);

}

export default WorkflowCard;