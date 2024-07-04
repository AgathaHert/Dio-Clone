import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Header from "../../components/header";
import { api } from "../../services/api";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import type { IFormData } from "./types";

const schema = yup
  .object({
    email: yup.string().email("Email invalido").required("Email obrigatorio"),
    password: yup
      .string()
      .min(6, "No minimo 6 digitos")
      .required("Senha obrigatoria"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),

    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}$senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Email ou senha inválidos");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                errorMessage={errors.email?.message}
                control={control}
                leftIcon={<MdEmail />}
                name="email"
                placeholder="E-mail"
              />
              <Input
                errorMessage={errors.password?.message}
                control={control}
                leftIcon={<MdLock />}
                name="password"
                placeholder="Senha"
                type="password"
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
