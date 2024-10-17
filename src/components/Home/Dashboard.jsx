import React from 'react'
import Finances from './Finances'
import LineChart from"../Charts/LineChart"
import BarChart from"../Charts/BarChart"
import PieChart from"../Charts/PieChart"
export default function Dashboard() {
  return (
    <div className="mx-64">
      <Finances />
      <div className="flex-1 ">
        <BarChart />
        <PieChart />
        <LineChart />
      </div>
    </div>
  );
}
