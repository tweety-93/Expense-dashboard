import React from 'react'
import {Line} from "react-chartjs-2"
import "chart.js/auto";
import { useSelector } from 'react-redux';

export default function LineChart() {
  const incomeData = useSelector((state)=>state.finance.expenses)

  const lineChartData = {
    labels: incomeData.map((d) => d.month),
    datasets: [
      {
        label: "Income",
        data: incomeData.map((item) => item.income),
        borderColor: "green",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
      },
    ],
  };
 return (
  <div>
     <h2 className="text-xl font-semibold text-blue-700">Monthly Income</h2>
     <div>
       <Line data={lineChartData} />
     </div>
   </div>
 );
}
