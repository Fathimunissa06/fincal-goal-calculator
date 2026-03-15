"use client"

import {useRouter} from "next/navigation"

export default function GoalCards(){

const router=useRouter()

return(

<div className="goal-grid">

<div className="goal-card" onClick={()=>router.push("/education")}>
<h2>🎓</h2>
<p>Education Goal</p>
</div>

<div className="goal-card" onClick={()=>router.push("/wedding")}>
<h2>💍</h2>
<p>Wedding Goal</p>
</div>

<div className="goal-card" onClick={()=>router.push("/travel")}>
<h2>✈️</h2>
<p>Travel Goal</p>
</div>

</div>

)

}