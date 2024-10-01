// src/App.tsx
import React from 'react';
import MensaDisplay from './components/MensaDisplay';
import Navbar from './components/Navbar';
import { Meal } from './types/Meal';
import { Counter } from './types/Counter';
import { Mensa } from './types/Mensa';

const App: React.FC = () => {
  const meal: Meal = {
    name: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    price: 12.99,
  };
  const counter: Counter = {
    name: 'Offering  1',
    meal: [meal, meal],
  };

  const mensa: Mensa = {
    name: 'Mensa Academica',
    counter: [counter, counter],
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-1 w-2/3 mx-auto p-6 ">
          <div className="flex flex-col items-center">
            <MensaDisplay mensa={mensa} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
