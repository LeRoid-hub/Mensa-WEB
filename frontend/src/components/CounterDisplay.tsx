import React from 'react';
import { Counter } from '../types/Counter';
import MealDisplay from './MealDisplay.tsx';

interface CounterProps {
  counter: Counter;
}

const CounterDisplay: React.FC<CounterProps> = ({ counter }) => {
  return (
    <div className="border rounded-lg p-6 max-w-sm shadow-lg m-4">
      <h2 className="text-2xl font-bold mb-4">{counter.name}</h2>
      <MealDisplay meal={counter.meal} />
    </div>
  );
};

export default CounterDisplay;

