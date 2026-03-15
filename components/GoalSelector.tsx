"use client"

type Props={
goal:string
setGoal:(g:string)=>void
}

const goals=[
{title:"Education",icon:"🎓"},
{title:"Home",icon:"🏠"},
{title:"Travel",icon:"✈️"},
{title:"Wedding",icon:"💍"}
]

export default function GoalSelector({goal,setGoal}:Props){

return(

<div className="goal-grid">

{goals.map(g=>(
<div
key={g.title}
className={`goal-card ${goal===g.title?"goal-active":""}`}
onClick={()=>setGoal(g.title)}
>

<h2>{g.icon}</h2>
<p>{g.title}</p>

</div>
))}

</div>

)

}