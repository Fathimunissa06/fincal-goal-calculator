"use client"

import{PieChart,Pie,Cell,Tooltip}from "recharts"

export default function InvestmentChart({investment,returns}:any){

const data=[
{name:"Investment",value:investment},
{name:"Returns",value:returns}
]

const colors=["#0052CC","#4DA3FF"]

return(

<div>

<h3>Investment Breakdown</h3>

<PieChart width={400} height={260}>

<Pie
data={data}
dataKey="value"
outerRadius={90}
label
>

{data.map((entry,index)=>(
<Cell key={index} fill={colors[index]}/>
))}

</Pie>

<Tooltip/>

</PieChart>

</div>

)

}