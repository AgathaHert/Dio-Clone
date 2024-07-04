import Header from "../../components/header";
import { Container, Title, TextContent, TitleHighlight } from "./styles";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/banner.png";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            {" "}
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClick}
          />
        </div>
        <div>
          <img src={Banner} alt="Imagem ilustrativa" />
        </div>
      </Container>
    </>
  );
};

export default Home;
