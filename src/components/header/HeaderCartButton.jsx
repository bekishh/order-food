import React from "react";
import { BasketIcon } from "../../assets";
import styled from "styled-components";

export const HeaderCartButton = () => {
  return (
    <StyledButton>
      <BasketIcon />
      <span className="bump">Your cart</span>
      <Badge>7</Badge>
    </StyledButton>
  );
};

const Badge = styled("span")`
  background-color: #8a2b06;
  font-weight: 700;
  padding: 4px 20px;
  border-radius: 30px;
  font-size: 20px;
  margin-left: 1rem;
`;

const StyledButton = styled("button")`
  cursor: pointer;
  border: none;
  color: white;
  background-color: #5a1f08;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  &:hover,
  &:active {
    background-color: #461805;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:active,
  &:hover > ${Badge} {
    background-color: #671f03;
    animation: BUMP 300ms ease-out;
  }

  & > svg {
    margin-right: 0.5rem;
  }

  & > .bump {
    font-size: 1rem;
    font-weight: 600rem;
  }

  @keyframes BUMP {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
