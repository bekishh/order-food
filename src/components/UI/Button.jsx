import React from "react";
import { PlusIcon } from "../../assets";

export const Button = ({ onClick, disabled }) => {
  return (
    <>
      <button onClick={onClick} disabled={disabled} style={AddedButton}>
        <PlusIcon />
        Add
      </button>
    </>
  );
};

const AddedButton = {
  display: "flex",
  width: "99px",
  height: "41px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  gap: "5px",
  border: "none",
  color: "white",
  backgroundColor: "#8A2B06",
  fontSize: "14px",
  fontWeight: "700",
  letterSpacing: "0.42px",
  marginLeft: '55px',
  marginTop: '16px'
};
