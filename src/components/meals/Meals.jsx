import React from "react";
import { MealItem } from "./MealItem";
import { styled } from "styled-components";

const DUMMY_MEALS = [
  {
    id: 1,
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },
  {
    id: 3,
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 4,
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];

export const Meals = () => {
  return (
    <MealsContainer>
      <InnerMealsContainer>
        <MealItem mealsList={DUMMY_MEALS} />
      </InnerMealsContainer>
    </MealsContainer>
  );
};

const MealsContainer = styled("div")`
  width: 100%;
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerMealsContainer = styled("div")`
  width: 1039px;
  height: 560px;
  background-color: white;
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 50px;
`;
