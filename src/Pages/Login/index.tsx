import React, { Fragment } from 'react';
import { Container, Logo, Form, FormTitle } from './style';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
    return(

        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={() => {}}>
                <FormTitle>Login</FormTitle>

                <Input type="email" placeholder="E-mail" required />
                <Input type="password" placeholder="Senha" required />

                <Button type="submit">
                    Acessar
                </Button>
            </Form>
        </Container>

    );
}

export default Login;