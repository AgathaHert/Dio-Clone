import React from "react";
import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  HasInfo,
  PostInfo,
} from "./styles";

import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/156599612?s=400&u=6fdef9d47fb246d64dd8ac51cfde2e1811cce47a&v=4" />
          <div>
            <h4>Nome</h4>
            <p>Há x dias</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito no curso de HTML e CSS no bootcamp dio do Global
            avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export default Card;
