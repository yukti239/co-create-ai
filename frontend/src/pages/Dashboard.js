import React,{useEffect,useState} from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import WorkflowCard from "../components/WorkflowCard";
import WorkflowChart from "../components/WorkflowChart";
import CreateWorkflow from "../components/CreateWorkflow";
import API from "../services/api";
import "../styles/dashboard.css";

function Dashboard(){

const [workflows,setWorkflows] = useState([]);

const loadWorkflows = ()=>{

API.get("/workflows")
.then(res=>{

setWorkflows(res.data);

})
.catch(err=>{

console.log(err);

})

};

useEffect(()=>{

loadWorkflows();

},[]);

let totalSteps = 0;
let completedSteps = 0;

workflows.forEach(w=>{

w.steps.forEach(step=>{

totalSteps++;

if(step.status==="completed"){

completedSteps++;

}

});

});

return(

<div className="dashboard">

<Sidebar/>

<div className="main">

<h1>Dashboard</h1>

<div className="cards">

<StatCard
title="Workflows"
value={workflows.length}
/>

<StatCard
title="Users Online"
value="5"
/>

<StatCard
title="Completed Tasks"
value={completedSteps}
/>

</div>

<h2 style={{marginTop:"30px"}}>

Workflow Analytics

</h2>

<WorkflowChart
completed={completedSteps}
total={totalSteps}
/>

<CreateWorkflow refreshWorkflows={loadWorkflows}/>

<h2 style={{marginTop:"30px"}}>

Your Workflows

</h2>

<div className="cards">

{workflows.map((wf,index)=>(
<WorkflowCard
key={index}
workflow={wf}
/>
))}

</div>

</div>

</div>

);

}

export default Dashboard;