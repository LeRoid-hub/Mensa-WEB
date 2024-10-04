import React from 'react';
import { Menu } from '../types/Menu';
import MealDisplay from './MealDisplay.tsx';

interface MenuProps {
  menu: Menu;
}

const CounterDisplay: React.FC<MenuProps> = ({ menu }) => {
  var meals = menu.Meal;

  return (
    <div className="border rounded-lg p-6 max-w-max shadow-lg m-4">
      <h2 className="text-2xl font-bold mb-4">{menu.Name}</h2>
      {menu.Meal?.length > 0 ? (
        meals.map((meal, index) => <MealDisplay key={index} meal={meal} />)
      ) : null}
    </div>
  );
};

export default CounterDisplay;

