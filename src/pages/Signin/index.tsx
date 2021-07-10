import { Card, Form, Button } from 'react-bootstrap'
import Logo from '../../assets/logo.png'

import { Container, Content } from './styles'



const SignIn: React.FC = () => {



    return (

        <Container>
            <Content>

                <img src={Logo} alt="" />
                <Form >
                    <Form.Group controlId="formBasicEmail" >

                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>


            </Content>

        </Container>



    )
}

export default SignIn