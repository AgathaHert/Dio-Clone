import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-dio.png";
import Button from "../Button";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";
import type { IHeader } from "./types";

const Header = ({ autenticado }: IHeader) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} alt="Logo da DIO" width={84} height={34} />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar" />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/156599612?v=4" />
          ) : (
            <>
              <MenuRight onClick={handleLogout}>Home</MenuRight>
              <Button title="Entrar" onClick={handleClick} />
              <Button title="Cadastrar" onClick={handleCadastro} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
