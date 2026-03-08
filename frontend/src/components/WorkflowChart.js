import React from "react";
import { PieChart,Pie,Cell,Tooltip,BarChart,Bar,XAxis,YAxis,CartesianGrid } from "recharts";

function WorkflowChart({completed,total}){

const pieData = [
{ name:"Completed", value:completed },
{ name:"Remaining", value:total-completed }
];

const barData = [
{ name:"Completed", value:completed },
{ name:"Remaining", value:total-completed }
];

const COLORS = ["#fbbf24","#374151"];

return(

<div style={{display:"flex",gap:"40px"}}>

<PieChart width={250} height={250}>

<Pie
data={pieData}
dataKey="value"
cx="50%"
cy="50%"
outerRadius={80}
label
>

{pieData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index]} />
))}

</Pie>

<Tooltip/>

</PieChart>

<BarChart width={300} height={250} data={barData}>

<CartesianGrid strokeDasharray="3 3" />

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="value" fill="#fbbf24"/>

</BarChart>

</div>

);

}

export default WorkflowChart;