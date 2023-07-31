import React from "react";
import { styled } from "styled-components";

export const MealItemForm = ({ title, description, price }) => {
  return (
    <MealsItemForm>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{"$" + price}</h3>
    </MealsItemForm>
  );
};

const MealsItemForm = styled("div")`
height: 130px;
  & > h2 {
    font-size: 18px;
    font-weight: 600;
  }
  & > p {
    font-size: 16px;
    font-style: italic;
  }
  & > h3 {
    color: #ad5502;
    font-size: 20px;
  }
`;
