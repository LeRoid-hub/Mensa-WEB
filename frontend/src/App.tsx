// src/App.tsx
import React from 'react';
import CounterDisplay from './components/CounterDisplay';
import { Meal } from './types/Meal';
import { Counter } from './types/Counter';

const App: React.FC = () => {
  const meal: Meal = {
    name: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    price: 12.99,
  };
  const counter: Counter = {
    name: 'Offering  1',
    meal: meal,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Today's Offerings</h1>
      <CounterDisplay counter={counter} />
    </div>
  );
};

export default App;
