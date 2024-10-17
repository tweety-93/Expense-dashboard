import React from 'react'
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Home/Navbar'
import Sidebar from './components/Home/Sidebar'
import Dashboard from './components/Home/Dashboard'
import Expenses from './components/Expenses/Expenses'
import Barchart from './components/Charts/BarChart'
import Linechart from "./components/Charts/LineChart";
import Piechart from "./components/Charts/PieChart";
import AddExpense from "./components/Expenses/AddExpense"


function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/barchart" element={<Barchart />} />
          <Route path="/linechart" element={<Linechart />} />
          <Route path="/piechart" element={<Piechart />} />
          <Route path="/addExpense" element={<AddExpense />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App