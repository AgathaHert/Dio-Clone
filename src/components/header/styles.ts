import styled from "styled-components";

export const Container = styled.div`
  height: 47px;
  width: 100%;
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #151515;
`;

export const BuscarInputContainer = styled.div`
  width: 175px;
  height: 30px;
  background-color: #2d2d2d;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  text-decoration: none;
  margin-right: 12px;
`;

export const MenuRight = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #ffffff;
  text-decoration: none;
  margin-right: 12px;
  margin-left: 12px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 2px solid #ffffff;
`;

export const Input = styled.input`
  background-color: transparent;
  flex: 1;
  color: #ffffff;
  border: none;
  outline: none;
  margin-left: 12px;
`;
