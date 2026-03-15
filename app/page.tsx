import GoalCards from "../components/GoalCards"
import Navbar from "../components/Navbar"

export default function Home(){

return(

<div>

<Navbar/>

<div className="container">

<h1 className="title">FinCal Financial Goal Planner</h1>

<p className="subtitle">
Understand how inflation and investing impact your future goals
</p>

<GoalCards/>

</div>

</div>

)

}