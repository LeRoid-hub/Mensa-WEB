// src/pages/Mensa.tsx
import React from 'react';
import MensaDisplay from '../components/MensaDisplay';
import Navbar from '../components/Navbar';

const Mensa: React.FC = () => {
  var url = window.location.pathname
  console.log(url)
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-1 w-2/3 mx-auto p-6 ">
          <div className="flex flex-col items-center">
            <MensaDisplay link={url.slice(1)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mensa;
