import React, { useState } from "react";
import {useDispatch} from"react-redux"
import { addIncome } from "../../store/FinanceSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input,setInput] = useState({month:"",income:""})
  
  const dispatch=useDispatch()
  
  const handleChange=(e)=>{
    const{name,value} = e.target
    setInput((prevData)=>({
      ...prevData,[name]:value
    }))
    
  }
  const addIncomeHandler=(e)=>{
    e.preventDefault();
    const selectedMonth=input.month.toLowerCase()
    
    dispatch(addIncome({
      month: selectedMonth,
      income:Number(input.income)
    }))
    setInput({month:"",income:""})
  }
   const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown}
          className="px-4 py-2 text-xl font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-500">
          +INCOME
        </button>
      {isOpen && (
        <div className="absolute z-10 w-64 p-4 mt-2 bg-white rounded-md shadow-lg right-4">
          <form className="space-y-4" onSubmit={addIncomeHandler}>
            <div>
              <label className="block font-medium text-gray-700">
                Income
              </label>
              <input
                type="number" name="income"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={input.income} onChange={handleChange}
                />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
              Month
              </label>
              <input
                type="text" name="month"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={input.month} onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default Navbar;
