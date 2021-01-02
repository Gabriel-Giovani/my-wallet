import React, { useState } from 'react';
import { Container, Logo, Form, FormTitle } from './style';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { signIn } = useAuth();

    return(
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Login</FormTitle>

                <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
                <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />

                <Button type="submit">
                    Acessar
                </Button>
            </Form>
        </Container>
    );
}

export default Login;