import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #3b3450;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;

export const InputText = styled.input`
  background-color: transparent;
  color: #fff;
  border: none;
  height: 30px;
  outline: none;
  font-size: 16px;
  margin-left: 10px;
  width: 100%;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 15px;
`;
