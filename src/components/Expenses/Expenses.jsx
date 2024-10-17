import React from "react";
import { TiDelete } from "react-icons/ti";
import {removeExpense} from "../../store/FinanceSlice"
import {useDispatch,useSelector} from "react-redux"

function Expenses(){
  const expensesList = useSelector(state=>state.finance.expenses)
  const dispatch=useDispatch();
  
  const deleteExpense =(id,month)=>{
    dispatch(removeExpense({id,month}))
    }

  return (
    <div className="flex-1 p-5">
      <div>
        <h2 className="mb-6 text-2xl font-bold text-center">Expense Tracker</h2>
        <ul>
          {expensesList.flatMap((monthData) => monthData.expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex items-center justify-between py-4 border-b border-blue-200"
            >
              <div>
                <p className="text-lg font-semibold">{expense.title}</p>
                <p className="text-sm text-gray-600">{expense.date}</p>
              </div>
              <div className="text-lg font-semibold">${expense.amount}</div>
              
              <button onClick={()=>deleteExpense(expense.id,monthData.month)}>
                <TiDelete className="text-2xl text-red-400 hover:text-red-700" />
              </button>
            </li>
          )))}
        </ul>
      </div>
    </div>
  );
};
export default Expenses;
