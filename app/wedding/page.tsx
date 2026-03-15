import Navbar from "../../components/Navbar"
import Calculator from "../../components/Calculator"

export default function Wedding(){

return(

<div>

<Navbar/>

<Calculator
title="Wedding Planner"
defaultCost={1500000}
/>

</div>

)

}