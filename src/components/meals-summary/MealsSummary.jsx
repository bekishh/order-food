import React from "react";
import styled from "styled-components";
import { MealsBannerImage } from "../../assets";

export const MealsSummary = () => {
  return (
    <section>
      <MainImageWrapper>
        <img
          src={MealsBannerImage}
          alt="Meals"   
        />
      </MainImageWrapper>
      <MealsSummaryContainer>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Copy Choose your favorite meal from our broad selection of available
          meals and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </MealsSummaryContainer>
    </section>
  );
};

const MainImageWrapper = styled("div")`
  width: 100%;
  height: 25rem;
  z-index: 0;
  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

const MealsSummaryContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  text-align: center;
  max-width: 45rem;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  background-color: #383838;
  color: white;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.3);
  margin-top: -10rem;
  position: relative;
  & > h2 {
    font-size: 2rem;
  }
`;
