import styled from "styled-components";
import type { IColumn } from "./types";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 25px;
  font-family: "Opens Sans";
  font-style: normal;
  color: #fff;
`;

export const TitleHighlight = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 25px;
  font-family: "Opens Sans";
  font-style: normal;
  color: #fff;
`;

export const Column = styled.div<IColumn>`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`;
