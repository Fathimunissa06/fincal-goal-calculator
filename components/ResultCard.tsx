type Props={
result:any
}

export default function ResultCard({result}:Props){

return(

<div className="card">

<h2>Investment Results</h2>

<p>
Future Goal Cost
</p>

<div className="result-number">
₹ {Math.round(result.futureCost).toLocaleString()}
</div>
<p>Yearly Investment</p>

<div className="result-number">
₹ {Math.round(result.yearlyInvestment).toLocaleString()}
</div>

<br/>

<p>Required Monthly SIP</p>

<div className="result-number">
₹ {Math.round(result.sip).toLocaleString()}
</div>

<p>Inflation Impact</p>

<div className="result-number">
₹ {Math.round(result.futureCost - result.totalInvestment).toLocaleString()}
</div>

<br/>

<p>Total Investment</p>

<div className="result-number">
₹ {Math.round(result.totalInvestment).toLocaleString()}
</div>

<br/>

<p>Estimated Returns</p>

<div className="result-number">
₹ {Math.round(result.totalReturns).toLocaleString()}
</div>

</div>

)
}