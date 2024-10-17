import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../components/Expenses/FinancialData";

const FinanceSlice = createSlice({
  name: "finance",
  initialState: {
      expenses: Data,
    
   },
  reducers: {
    addExpense: (state, action) => {
      const {newExpense,month}  = action.payload;
      const monthData = state.expenses.find((m) => m.month.toLowerCase() === month.toLowerCase());
      if (monthData) {
        monthData.expenses.push(newExpense);
      } else {
          state.expenses.push({
          month:month.toLowerCase(),
          income: 0,
          expenses: [newExpense], 
        });
      }
   },
   removeExpense: (state, action) => {
     const { month, id } = action.payload;
     const monthData = state.expenses.find((m) => m.month.toLowerCase() === month.toLowerCase());
    if (monthData) {
        const Index = monthData.expenses.findIndex((expense) => expense.id === id);
    if (Index !== -1) {
          monthData.expenses.splice(Index, 1);
        }
      }
    },
  addIncome:(state,action)=>{
 const { month, income } = action.payload;
 const monthData = state.expenses.find((m) => m.month.toLowerCase() === month.toLowerCase());

 if (monthData) {
   monthData.income = (monthData.income || 0) + income;
  monthData.savings = monthData.income - (monthData.totalExpenditure || 0);
  } else {
   state.expenses.push({
     month: month.toLowerCase(),
     income: income,
     expenses: [],
     savings: income,
   });
    }
   }
  }
});
export const { removeExpense, addExpense ,addIncome} = FinanceSlice.actions;
export default FinanceSlice.reducer;
