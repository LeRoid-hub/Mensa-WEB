import React from 'react';
import { Counter } from '../types/Counter';
import MealDisplay from './MealDisplay.tsx';

interface CounterProps {
  counter: Counter;
}

const CounterDisplay: React.FC<CounterProps> = ({ counter }) => {
  var meals = counter.meal;

  return (
    <div className="border rounded-lg p-6 max-w-max shadow-lg m-4">
      <h2 className="text-2xl font-bold mb-4">{counter.name}</h2>
      {counter.meal?.length > 0 ? (
        meals.map((meal, index) => <MealDisplay key={index} meal={meal} />)
      ) : null}
    </div>
  );
};

export default CounterDisplay;

