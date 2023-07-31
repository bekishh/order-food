import React, { useRef } from "react";
import { styled } from "styled-components";
import { Button } from "../UI/Button";

export const AmountForm = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <AmountNumber>
        <h3 onClick={handleClick}>Amount</h3>
        <input
          ref={inputRef}
          type="number"
          defaultValue="1"
        />
      </AmountNumber>
      <Button />
    </div>
  );
};

const AmountNumber = styled("div")`
  display: flex;
  & > input {
    width: 60px;
    height: 32px;
    border-radius: 6px;
    padding: 10px;
    border: 1px solid #c7c1c1;
  }
  & > h3 {
    font-size: 18px;
    margin-right: 20px;
    cursor: pointer;
  }
`;
