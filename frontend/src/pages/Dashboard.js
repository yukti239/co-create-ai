import React, { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import CreateWorkflow from "../components/CreateWorkflow";
import WorkflowCard from "../components/WorkflowCard";
import WorkflowChart from "../components/WorkflowChart";
import ProgressChart from "../components/ProgressChart";
import "../styles/dashboard.css";

function Dashboard(){

const [workflows,setWorkflows] = useState([]);

const loadWorkflows = async()=>{
try{
const res = await API.get("/workflows");

// latest first
setWorkflows(res.data.reverse());

}catch(err){
console.log(err);
}
};

useEffect(()=>{
loadWorkflows();
},[]);


// ✅ REAL STATS
let totalSteps = 0;
let completedSteps = 0;

workflows.forEach(w=>{
totalSteps += w.steps.length;

completedSteps += w.steps.filter(
s=>s.status==="completed"
).length;
});

const totalWorkflows = workflows.length;
const completedWorkflows = workflows.filter(
w=>w.steps.every(s=>s.status==="completed")
).length;

const pendingWorkflows = totalWorkflows - completedWorkflows;

// latest workflow
const latest = workflows.length > 0 ? workflows[0] : null;

return(

<div className="layout">

<Sidebar/>

<div className="main">

<h1>Dashboard</h1>

{/* ✅ STATS BACK */}
<div className="stats">

<div className="card stat">
<h3>Total Workflows</h3>
<p>{totalWorkflows}</p>
</div>

<div className="card stat">
<h3>Completed Workflows</h3>
<p>{completedWorkflows}</p>
</div>

<div className="card stat">
<h3>Pending Workflows</h3>
<p>{pendingWorkflows}</p>
</div>

</div>

{/* ✅ GRAPHS */}
<h2>Workflow Analytics</h2>

<div className="charts">

<WorkflowChart 
completed={completedSteps} 
total={totalSteps}
/>

<ProgressChart 
completed={completedSteps} 
remaining={totalSteps - completedSteps}
/>

</div>

{/* CREATE */}
<CreateWorkflow reload={loadWorkflows}/>

{/* ONLY LATEST */}
<h2>Latest Workflow</h2>

<div className="workflow-grid">

{latest ? (
<WorkflowCard workflow={latest} reload={loadWorkflows}/>
) : (
<p>No workflow</p>
)}

</div>

</div>

</div>

);

}

export default Dashboard;