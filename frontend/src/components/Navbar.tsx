// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Placeholder (Empty) */}
        <div className="flex-1"></div>

        {/* Title */}
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold">Mensa WEB</h1>
        </div>

        {/* Login Button */}
        <div className="flex-1 text-right">
         {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Login
          </button>*/}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
