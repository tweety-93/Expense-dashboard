import React from "react";
import {useSelector} from "react-redux"

function Finances() {
  const Expenses=useSelector((state)=>state.finance.expenses)

const totalIncome=()=>{
return Expenses.reduce((total,month) => total + month.income, 0);
}
 const totalExpenses = () => {
   return Expenses.reduce(
     (total, month) =>
       total + month.expenses.reduce((sum, expense) => sum + expense.amount, 0),0 );
 };
const calculateSavings = () =>{return totalIncome() - totalExpenses()}
  
return (
    <div className="grid grid-cols-3 gap-8 p-5 mx-6 text-xl text-white place-content-center">
      <div className="p-4 text-center bg-blue-700 rounded ">Income:{totalIncome()}</div>
      <div className="p-4 text-center bg-red-500 rounded">
          Expense:{totalExpenses()}
        </div>
      <div className="p-4 text-center bg-green-700 rounded ">
          Savings:{calculateSavings()}
        </div>
       </div>
  );
}

export default Finances;
