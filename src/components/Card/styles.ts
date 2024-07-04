import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: #3b4651;
  margin-bottom: 24px;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 180px;
`;

export const Content = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    font-family: "Open Sans";
    font-style: normal;
    line-height: 25px;
  }

  p {
    font-size: 12px;
    color: #fff;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #fff;
`;

export const PostInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-size: 18px;
    color: #fff;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
  }

  p {
    font-size: 12px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
`;

export const HasInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-size: 12px;
    color: #ffffff80;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }

  p {
    font-size: 16px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
  }
`;
