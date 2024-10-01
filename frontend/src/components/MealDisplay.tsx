// src/components/MealDisplay.tsx
import React from 'react';
import { Meal } from '../types/Meal.ts';

interface MealProps {
  meal: Meal;
}

const MealDisplay: React.FC<MealProps> = ({ meal }) => {
  return (
      <>
      <div className="flex ">
        <div>
          <h2 className="text-2xl font-bold mb-4">{meal.name}</h2>
          <p className="text-gray-600 mb-4">{meal.description}</p>
        </div>
        <div>
        <p className="text-lg font-semibold text-gray-800">${meal.price.toFixed(2)}</p>
        </div>
      </div>
      </>
  );
};

export default MealDisplay;