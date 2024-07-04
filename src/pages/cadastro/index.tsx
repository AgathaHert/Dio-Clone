import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Header from "../../components/header";
import { api } from "../../services/api";
import {
  Column,
  Container,
  EsqueciText,
  FazerLogin,
  LoginConta,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import type { IFormData } from "./types";

const schema = yup
  .object({
    name: yup.string().required("Nome obrigatorio"),
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
        navigate("/login");
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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                errorMessage={errors.name?.message}
                control={control}
                leftIcon={<MdPerson />}
                name="name"
                placeholder="Nome Completo"
              />
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
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Column>
              <EsqueciText>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </EsqueciText>
              <LoginConta>Ja tenho conta</LoginConta>
              <FazerLogin>Fazer login</FazerLogin>
            </Column>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
