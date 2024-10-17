import React from 'react'
import AddIncome from './AddIncome';

function Navbar() {
  return (
    <nav className="p-3 bg-blue-700">
      <div className="container flex items-center justify-between mx-3 ">
        <h1 className="text-2xl font-bold text-white ">Expense Dashboard</h1>
        <AddIncome/>
      </div>
      
     </nav>
  );
}

export default Navbar;