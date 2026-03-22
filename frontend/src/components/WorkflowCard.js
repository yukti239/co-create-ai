import React from "react";
import API from "../services/api";

function WorkflowCard({ workflow, reload }) {

const toggleStep = async (index) => {

try {

const updatedSteps = workflow.steps.map((step, i) => {
if(i === index){
return {
...step,
status: step.status === "completed" ? "pending" : "completed"
};
}
return step;
});

await API.put(`/workflows/${workflow._id}`, {
steps: updatedSteps
});

reload();

} catch (err) {
console.log(err);
alert("Update failed");
}

};

const handleDelete = async()=>{
try{
await API.delete(`/workflows/${workflow._id}`);
reload();
}catch{
alert("Delete failed");
}
};

const completedSteps = workflow.steps.filter(
s=>s.status==="completed"
).length;

const progress = Math.round(
(completedSteps / workflow.steps.length) * 100
);

return(

<div className="card">

<h3>{workflow.title}</h3>
<p>{workflow.description}</p>

<h4>Steps</h4>

{workflow.steps.map((step,index)=>(
<div key={index} style={{marginBottom:"5px"}}>

<input
type="checkbox"
checked={step.status==="completed"}
onChange={()=>toggleStep(index)}
style={{marginRight:"10px"}}
/>

{step.action}

</div>
))}

<p><b>Progress:</b> {progress}%</p>

<button 
onClick={handleDelete}
style={{background:"red", marginTop:"10px"}}
>
Delete
</button>

</div>

);

}

export default WorkflowCard;