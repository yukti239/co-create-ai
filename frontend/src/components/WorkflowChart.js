import React from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

function WorkflowChart({completed,total}){

const data = [
{ name:"Completed", value:completed },
{ name:"Pending", value: total - completed }
];

return(

<div className="card">

<h3>Completion Overview</h3>

<PieChart width={300} height={250}>
<Pie data={data} dataKey="value" outerRadius={90}/>
<Tooltip/>
<Legend/>
</PieChart>

</div>

);

}

export default WorkflowChart;