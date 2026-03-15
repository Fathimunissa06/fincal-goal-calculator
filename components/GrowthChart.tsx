"use client"

import{
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid
}from "recharts"

export default function GrowthChart({data}:any){

return(

<div>

<h3>Goal Cost Growth</h3>

<LineChart width={450} height={260} data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="year"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="value"
stroke="#4DA3FF"
strokeWidth={3}
/>

</LineChart>

</div>

)

}