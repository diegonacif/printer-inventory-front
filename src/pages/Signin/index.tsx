
import Logo from '../../assets/logo.png'

import { Form } from '@unform/web';

import { Container, Content } from './styles'

import Input from '../../components/inputs'






const SignIn: React.FC = () => {



    return (

        <Container>
            <Content>
                <img src={Logo} alt="logo ink" />
                <Form>

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





                </Form>

            </Content>

        </Container>



    )
}

export default SignIn