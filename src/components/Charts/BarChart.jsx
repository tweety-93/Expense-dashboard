import React from 'react'
import {Bar} from"react-chartjs-2"
import "chart.js/auto"
import {useSelector} from "react-redux";

function BarChart() {
  const chartData=useSelector((state)=>state.finance.expenses)

  const totalExpenses = chartData.map((item) =>
    item.expenses.reduce((acc, expense) => acc + expense.amount, 0)
  );
  const savings = chartData.map((item, index) => item.income - totalExpenses[index]);

  const barChartData = 
    {
      labels:chartData.map((e)=>e.month),
      datasets: [
         {
          label:"Income",
          data: chartData.map((i)=>i.income),
          backgroundColor: "pink",
        },
        
        {
          label: "TotalExpenses",
          data: totalExpenses,
          backgroundColor: "skyblue",
        },
        {
          label: "Savings",
          data: savings,
          backgroundColor: "green",
        },
        
      ],
    };
return (
    <div className="flex-1">
      <h2 className='text-xl font-semibold text-blue-600'>Expenses</h2>
      <Bar data={barChartData}/>
    </div>
  )
}
export default BarChart