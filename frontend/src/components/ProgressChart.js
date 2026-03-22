import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function ProgressChart({completed,remaining}){

const data = [
{ name:"Completed", value:completed },
{ name:"Remaining", value:remaining }
];

return(

<div className="card">

<h3>Workflow Progress</h3>

<BarChart width={350} height={250} data={data}>
<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="value"/>
</BarChart>

</div>

);

}

export default ProgressChart;