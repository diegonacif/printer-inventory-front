import React, { useCallback, useRef } from 'react';
import logoImg from '../../assets/logo.jpg'



import { Container, Content, AnimationContainer } from './styles'
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as yup from 'yup'
import { useHistory, Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors'


import Input from '../../components/Inputs'
import Button from '../../components/Buttons'

interface SignInFormData {
  email: string;
  password: string;
}


const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = yup.object().shape({
          email: yup
            .string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
        history.push('/dashboard');
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }

    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>

          <img src={logoImg} alt="Ink" />
          <Form ref={formRef} onSubmit={handleSubmit}>

            <h1>Login</h1>
            <Input
              name="email"
              placeholder="E-mail *"

            />

            <Input
              name="password"
              type="password"
              placeholder="Senha *"
            />
            <Button type="submit">Entrar</Button>

          </Form>

          <Link to="#">
            <span>Esqueceu a senha ?</span>
          </Link>



        </AnimationContainer>

      </Content>


    </Container>
  )

};

export default SignIn;
