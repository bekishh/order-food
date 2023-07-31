import React, { useState } from 'react';

export const CartContext = React.createContext({
  addedMeals: [],
  updateMealAmount: () => {},
});

export const CartProvider = ({ children }) => {
  const [addedMeals, setAddedMeals] = useState([]);

  const addMealHandler = (newMeal) => {
    const currentIndex = addedMeals.findIndex((m) => m.id === newMeal.id);
    if (currentIndex === -1) {
      return setAddedMeals([...addedMeals, newMeal]);
    }
    const newMeals = addedMeals.map((meal) => {
      if (meal.id === newMeal.id) {
        return {
          ...meal,
          amount: meal.amount + newMeal.amount,
        };
      }
      return meal;
    });
    setAddedMeals(newMeals);
  };

  const updateMealAmountHandler = (id, newAmount) => {
    const updatedMeals = addedMeals.map((meal) => {
      if (meal.id === id) {
        return { ...meal, amount: newAmount };
      }
      return meal;
    });
    setAddedMeals(updatedMeals);
  };

  return (
    <CartContext.Provider
      value={{
        addedMeals,
        onAddMeal: addMealHandler,
        updateMealAmount: updateMealAmountHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
