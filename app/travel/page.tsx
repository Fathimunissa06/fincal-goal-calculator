import Navbar from "../../components/Navbar"
import Calculator from "../../components/Calculator"

export default function Travel(){

return(

<div>

<Navbar/>

<Calculator
title="Travel Planner"
defaultCost={800000}
/>

</div>

)

}