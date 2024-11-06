import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./styles";
import { Button } from "../../components/Button";
import Logo from "../../assets/Logo2.svg";
import { api } from "../../services/api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContent";

export function Login() {
    const navigate = useNavigate();
    const {putUserData} = useUser();

    const schema = yup.object({
        email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
        password: yup.string().min(6).required('Digite uma senha'),
    })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    console.log(errors)

    const onSubmit = async (data) => {
        const {
            data: userData} = await toast.promise(
            api.post('/session', {
                email: data.email,
                password: data.password,
            }),
            {
                pending: 'Verifique seus dados',
                success: {
                    render(){
                        setTimeout(()=>{
                            navigate('/');
                        }, 2000);
                        return 'Seja bem-vindo(a) 👌';
                    },
                },
                error: 'Email ou Senha incorretos 🤯',
            },
        );
        putUserData(userData);
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt='logo-devburger' />
            </LeftContainer>

            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>

                <p>
                    Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
                </p>
            </RightContainer>
        </Container>
    );

}