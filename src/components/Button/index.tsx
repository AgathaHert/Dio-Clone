/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { ButtonContainer } from "./styles";
import type { IButton } from "./types";

const Button = ({ title, variant = "primary", onClick }: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
