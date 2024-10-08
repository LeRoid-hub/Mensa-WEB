import React from "react";
import Navbar from "../components/Navbar";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 w-2/3 mx-auto p-6 ">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Mensa App</h1>
          <p>Click on the Mensa link in the navbar to get started</p>
        </div>
      </div>
    </div>
  );
}

export default Index;