import React from "react";
import { Container, NameText, Progress, UserPicture } from "./styles";
import type { IUserInfo } from "./types";

const UserInfo = ({ picture, name, percentual }: IUserInfo) => {
  return (
    <Container>
      <UserPicture src={picture} />
      <div>
        <NameText>{name}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};

export default UserInfo;
