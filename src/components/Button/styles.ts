import styled, { css } from "styled-components";
import type { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
  background-color: #565656;
  border-radius: 22px;
  position: relative;
  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    opacity: 0.6;
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;
      background-color: #e4105d;
      margin-top: 20px;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        border-radius: 22px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
      }
    `}
`;
