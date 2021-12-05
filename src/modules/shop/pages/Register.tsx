import styled from 'styled-components'
import { mobile } from '../responsive';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgb(255,255,255,0.5),
        rgb(255,255,255,0.5)
    ),
    url("/assets/logo/248834439_127986506265379_640078809210944444_n.jpg") 
    center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
    return(
        <Container>
            <Wrapper>
                <Title>CRIE UM CONTA</Title>
                <Form>
                    <Input placeholder="Nome" />
                    <Input placeholder="Sobrenome" />
                    <Input placeholder="email" />
                    <Input placeholder="usuário" />
                    <Input placeholder="senha" />
                    <Input placeholder="confirme senha" />
                    <Agreement>
                        Ao criar uma conta, aceito os Ao criar uma conta, aceito os <b>TERMOS</b>
                    </Agreement>
                    <Button>Criar</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;