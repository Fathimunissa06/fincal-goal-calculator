"use client"

import { useState, useEffect } from "react"
import ResultCard from "./ResultCard"
import GrowthChart from "./GrowthChart"
import InvestmentChart from "./InvestmentChart"
import { calculateFinance } from "../utils/finance"

export default function Calculator({ title, defaultCost }: any) {

  const [goalCost, setGoalCost] = useState(defaultCost)
  const [years, setYears] = useState(10)
  const [inflation, setInflation] = useState(6)
  const [returns, setReturns] = useState(12)

  const [result, setResult] = useState<any>(null)

  useEffect(() => {

    const r = calculateFinance(goalCost, years, inflation, returns)

    setResult(r)

  }, [goalCost, years, inflation, returns])

  return (

    <div className="container">

      <h1 className="title">{title}</h1>

      <div className="grid">

        <div className="card">

          <h3>Current Goal Cost ₹ {goalCost.toLocaleString()}</h3>

          <input
            className="slider"
            type="range"
            min="500000"
            max="10000000"
            step="50000"
            value={goalCost}
            onChange={(e) => setGoalCost(Number(e.target.value))}
          />

          <h3>Years to Goal {years}</h3>

          <input
            className="slider"
            type="range"
            min="1"
            max="30"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />

          <h3>Inflation Rate (Cost Increase) {inflation}%</h3>

          <input
            className="slider"
            type="range"
            min="1"
            max="10"
            value={inflation}
            onChange={(e) => setInflation(Number(e.target.value))}
          />

          <p style={{ color: "#C5D1E3" }}>
            Inflation represents how much your goal cost increases every year.
          </p>

          <h3>Expected Investment Return {returns}%</h3>

          <input
            className="slider"
            type="range"
            min="5"
            max="20"
            value={returns}
            onChange={(e) => setReturns(Number(e.target.value))}
          />

          <p style={{ color: "#C5D1E3" }}>
            Higher returns reduce the monthly SIP required to achieve the goal.
          </p>

        </div>

        {result && <ResultCard result={result} />}

      </div>

      {result && (

        <div className="grid" style={{ marginTop: 40 }}>

          <div className="card">
            <GrowthChart data={result.growthData} />
          </div>

          <div className="card">
            <InvestmentChart
              investment={result.totalInvestment}
              returns={result.totalReturns}
            />
          </div>

        </div>

      )}

      <div className="card" style={{ marginTop: 40 }}>

        <h3>How This Calculator Works</h3>

        <p>
          Step 1: The calculator increases your goal cost based on the inflation rate.
          This helps estimate how expensive the goal will become in the future.
        </p>

        <p>
          Step 2: It then calculates the monthly SIP required to achieve that goal
          based on the expected investment return.
        </p>

        <p>
          This helps investors understand how inflation and investment returns
          affect long-term financial planning.
        </p>

      </div>
      <div className="disclaimer">

<p>

<strong>Disclaimer:</strong> This tool has been designed for information
purposes only. Actual results may vary depending on various factors
involved in the capital market.

</p>

<p>

Investors should not consider the above calculations as a recommendation
for any schemes of HDFC Mutual Fund.

</p>

<p>

Past performance may or may not be sustained in the future and is not
a guarantee of any future returns.

</p>

</div>

    </div>

  )

}