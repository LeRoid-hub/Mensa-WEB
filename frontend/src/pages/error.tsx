import React from "react";

const Error: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 w-2/3 mx-auto p-6 ">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p>Something went wrong</p>
        </div>
      </div>
    </div>
  );
};

export default Error;