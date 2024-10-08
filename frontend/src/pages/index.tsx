// src/App.tsx
import React from 'react';
import MensaDisplay from '../components/MensaDisplay';
import Navbar from '../components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-1 w-2/3 mx-auto p-6 ">
          <div className="flex flex-col items-center">
            <MensaDisplay link='bremen/mensa-neustadtswall' />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
