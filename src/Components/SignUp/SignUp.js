import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
// import { signUp } from '../../Services/api'

export default function SingUp() {

    const navigate = useNavigate();

    const [disable, setDisable] = useState(false)

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        secondPassword: '',
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function verifyPassword() {
        if (form.password === form.secondPassword) {
            return true
        }
    }

    function sendForm(e) {
        if (disable === true) {
            return;
        }
        setDisable(true)

        e.preventDefault();

        if (!form.username || !form.email || !form.password || !form.secondPassword) {
            return alert('Preencha todos os campos')
        }
        if (!verifyPassword()) {
            alert('a senha não confere')
            return;
        }

        const body = {
            username: form.username,
            email: form.email,
            password: form.password,
        }

        // const promise = signUp(body)
        //     .then(res => {
        //         navigate('/')
        //     })
        //     .catch(err => {
        //         alert(err.response.data);
        //     });


    }

    return (

        <Wrapper>
            <HomeTitle>My Wallet</HomeTitle>
            <FormWrapper onSubmit={sendForm}>
                <InputLogin
                    type='name'
                    name='username'
                    placeholder="Nome"
                    onChange={handleForm}
                    value={form.username}
                    disabled={disable}
                    required
                />

                <InputLogin
                    type='email'
                    name='email'
                    placeholder="E-mail"
                    onChange={handleForm}
                    value={form.email}
                    disabled={disable}
                    required
                />

                <InputLogin
                    type='password'
                    name='password'
                    placeholder="Senha"
                    onChange={handleForm}
                    value={form.password}
                    disabled={disable}
                    required
                />

                <InputLogin
                    type='password'
                    name='secondPassword'
                    placeholder="Confirme a senha"
                    onChange={handleForm}
                    value={form.secondPassword}
                    disabled={disable}
                    required
                />

                <ConfirmButton
                    type='submit'
                >
                    Cadastrar
                </ConfirmButton>
            </FormWrapper>



            <MiniWrapper>
                <Link to='/signin'>Já tem uma conta? Entre agora!</Link>
            </MiniWrapper>
        </Wrapper>


    );

}

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: #8C11BE;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const HomeTitle = styled.div`
width: 87vw;
height: 8vh;
font-size: 32px;
font-family: 'Saira Stencil One', cursive;
color: #FFF;
display:flex;
justify-content: center;
`
const FormWrapper = styled.form`
width: 87vw;
`


const InputLogin = styled.input`
width: 87vw;
height: 8vh;
border-radius:5px;
margin-bottom: 13px;
font-size: 26px;
color: #000;
::placeholder{
    margin-left: 10px;
    
}
`;

const ConfirmButton = styled.button`
width: 87vw;
height: 7vh;
border-radius:5px;
background-color: #A328D6;
display:flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: #fff;
cursor: pointer;
`;

const MiniWrapper = styled.div`
width: 87vw;
height: 7vh;
display:flex;
justify-content: center;
align-items: center;
font-size: 15px;
font-weight: 900;
color: #fff;
text-decoration-line: underline;
cursor: pointer;
`;