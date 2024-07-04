import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
`;

export const Wrapper = styled.div`
  max-width: 300px;
  margin-left: 200px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  width: 500px;
  margin-bottom: 20px;
  line-height: 44px;
  font-family: "Opens Sans";
  font-style: normal;
  color: #fff;
`;

export const TitleLogin = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 44px;
  font-family: "Opens Sans";
  font-style: normal;
`;

export const SubtitleLogin = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 35px;
  line-height: 25px;
  font-family: "Opens Sans";
  font-style: normal;
`;

export const EsqueciText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  font-family: "Opens Sans";
  font-style: normal;
  color: #fff;
  margin-top: 30px;
`;

export const FazerLogin = styled.a`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  font-family: "Opens Sans";
  font-style: normal;
  color: #23dd7a;
  margin-top: 30px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginConta = styled.a`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  font-family: "Opens Sans";
  font-style: normal;
  color: #e4105d;
  margin-top: 30px;
  cursor: pointer;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`;
