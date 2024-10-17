import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../store/FinanceSlice";

function AddExpense() {
  const [input, setInput] = useState({ title: "", amount:"", date: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: name==="amount"?Number(value):value,
    }));
  };

  const addHandler = (e) => {
    e.preventDefault();

   // if(input.title || input.amount ||input.date){
    //  alert("Please fill in all fields");
    //}
     const selectedDate = new Date(input.date);
     const selectedMonth = selectedDate
       .toLocaleString("default", {
         month: "long",
       }).toLowerCase();

    const id = Date.now().toString();
  
  dispatch(
      addExpense({
        month:selectedMonth,
        newExpense: {
          id:id,
          title: input.title,
          amount:input.amount,
          date: input.date,
        },
      })
    );
   setInput({ title: "", amount: "", date: "" });
  };

  return (
    <div>
      <div className="justify-center flex-1 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl font-bold text-center text-gray-900">
            Add Expense
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={addHandler}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-900"
              >
                Expense
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  className="block w-full rounded-md border-2 py-1.5 text-gray-900"
                  value={input.title}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-900"
                >
                  Amount
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="number"
                  name="amount"
                  className="block w-full rounded-md border-2 py-1.5 text-gray-900"
                  value={input.amount}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-900"
              >
                Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date"
                  className="block w-full rounded-md border-2 py-1.5 text-gray-900"
                  value={input.date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddExpense;
