import React from "react";
import { MealItemForm } from "./MealItemForm";
import { AmountForm } from "./AmountForm";
import { styled } from "styled-components";

export const MealItem = ({ mealsList = [] }) => {
  return mealsList.map((meals) => {
    return (
      <StyledMeals>
        <MealItemForm
          id={meals.id}
          title={meals.title}
          description={meals.description}
          price={meals.price}
        />
        <AmountForm />
      </StyledMeals>
    );
  });
};

const StyledMeals = styled("div")`
    display: flex;
    justify-content: space-between;
`