import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
import Header from "../../components/header";
import { Column, Container, Title, TitleHighlight } from "./styles";

const Home = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={20}
            name="Ágatha"
            picture="https://avatars.githubusercontent.com/u/156599612?s=400&u=6fdef9d47fb246d64dd8ac51cfde2e1811cce47a&v=4"
          />
          <UserInfo
            percentual={40}
            name="Ágatha"
            picture="https://avatars.githubusercontent.com/u/156599612?s=400&u=6fdef9d47fb246d64dd8ac51cfde2e1811cce47a&v=4"
          />
          <UserInfo
            percentual={60}
            name="Ágatha"
            picture="https://avatars.githubusercontent.com/u/156599612?s=400&u=6fdef9d47fb246d64dd8ac51cfde2e1811cce47a&v=4"
          />
          <UserInfo
            percentual={80}
            name="Ágatha"
            picture="https://avatars.githubusercontent.com/u/156599612?s=400&u=6fdef9d47fb246d64dd8ac51cfde2e1811cce47a&v=4"
          />
          <UserInfo
            percentual={100}
            name="Ágatha"
            picture="https://avatars.githubusercontent.com/u/156599612?s=400&u=6fdef9d47fb246d64dd8ac51cfde2e1811cce47a&v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Home;
