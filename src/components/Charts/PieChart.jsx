import React from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import {useSelector} from "react-redux";

function PieChart() {

const pieData=useSelector((state=>state.finance.expenses))
  
const expenseCategories = [
  ...new Set(pieData.flatMap((item) => item.expenses.map((exp) => exp.title.toLowerCase()))),
];

const expenseData = pieData.map((item) => {
  const expenses = {};
  expenseCategories.forEach((category) => (expenses[category] = 0));
  item.expenses.forEach((expense) => {
    if (expense.title.toLowerCase() in expenses) {
      expenses[expense.title.toLowerCase()] += expense.amount;
    } else {
      expenses[expense.title.toLowerCase()] = expense.amount;
    }
  });
  return expenses;
});
 
const totalCategoryExpenses = expenseCategories.map((category) => {
   return expenseData.reduce((acc, month) => acc + (month[category] || 0), 0);
 });

const totalExpenseSum = totalCategoryExpenses.reduce(
   (acc, val) => acc + val,0);
   
 const expensePercentages = totalCategoryExpenses.map((value) =>
   ((value / totalExpenseSum) * 100).toFixed(2)
 );

const pieChartData = {
  labels: expenseCategories.map((title,index)=>`${title} (${expensePercentages[index]}%)`),
  datasets: [
    {
      label: "Expense Categories",
      data:totalCategoryExpenses,
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "yellow",
        "skyblue",
        "green",
        "orange",
        "purple"
      ],
    },
  ],
};
  return (
    <div>
      <h2 className="text-xl font-semibold text-blue-700">Pie Chart</h2>
      <Pie data={pieChartData} className="flex-1 p-3" />
    </div>
  );
}
export default PieChart;
