import React from "react";
import { RxDashboard } from "react-icons/rx";
import { MdAddCard } from "react-icons/md";
import {FaChartPie,FaList,FaChartLine} from "react-icons/fa";
import {IoBarChart} from "react-icons/io5"
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="w-48 min-h-screen p-4 text-white bg-gray-800">
      <nav className="mt-5 space-y-4">
        <Link to="/" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white">
          <RxDashboard className="w-6 h-6 mr-3" />
          <span>Dashboard</span>
        </Link>
        <Link to="/addexpense" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white">
          <MdAddCard className="w-6 h-6 mr-3" />
          <span>Add Expense</span>
        </Link>
        <Link to="/expenses" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white">
          <FaList className="w-6 h-6 mr-3" />
          <span>Expenses</span>
        </Link>
        <Link to="/barchart" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white">
          <IoBarChart className="w-6 h-6 mr-3" />
          <span>Barchart</span>
        </Link>
        <Link to="/linechart" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white">
          <FaChartLine className="w-6 h-6 mr-3" />
          <span>Linechart</span>
        </Link>

        <Link to="/piechart" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white">
          <FaChartPie className="w-6 h-6 mr-3" />
          <span>Piechart</span>
        </Link>

        
      </nav>
    </div>
  );
};

export default Sidebar;
