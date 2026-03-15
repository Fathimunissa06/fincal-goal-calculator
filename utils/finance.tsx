export function calculateFinance(
  presentCost:number,
  years:number,
  inflation:number,
  annualReturn:number
){

// STEP 1: Inflate Goal Value

const futureCost =
presentCost * Math.pow(1 + inflation/100 , years)

// STEP 2: Convert Return to Monthly Rate

const r = annualReturn / 100 / 12

// STEP 3: Total Months

const n = years * 12

// STEP 4: SIP Formula

const sip =
(futureCost * r) /
((Math.pow(1+r,n) - 1) * (1+r))

// Total Investment

const totalInvestment = sip * n

// Returns Earned

const totalReturns = futureCost - totalInvestment

// Growth Simulation

const growthData=[]

for(let i=1;i<=years;i++){

const value =
presentCost * Math.pow(1 + inflation/100 , i)

growthData.push({
year:"Year "+i,
value:Math.round(value)
})

}

return{
futureCost,
sip,
totalInvestment,
totalReturns,
growthData
}

}