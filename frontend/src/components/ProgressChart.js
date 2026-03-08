import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function ProgressChart({completed,total}){

const data = [
{ name:"Completed", value: completed },
{ name:"Remaining", value: total-completed }
]

const COLORS = ["#fbbf24","#374151"]

return(

<PieChart width={250} height={250}>

<Pie
data={data}
dataKey="value"
cx="50%"
cy="50%"
outerRadius={80}
label
>

{data.map((entry,index)=>(
<Cell key={index} fill={COLORS[index]}/>
))}

</Pie>

<Tooltip/>

</PieChart>

)

}

export default ProgressChart