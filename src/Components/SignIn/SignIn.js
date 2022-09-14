import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { logIn } from "../../Services/api";

export default function LogIn() {

    const navigate = useNavigate();
    const [disable, setDisable] = useState(false)

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    function clearForm() {
        setForm({
            email: '',
            password: '',

        })
        setDisable(false)
    }

    function sendForm(e) {
        e.preventDefault()

        if (disable === true) {
            return;
        }
        setDisable(true)

        const body = {
            email: form.email,
            password: form.password,
        }
        // const promise = logIn(body)
        //     .then((res) => {

        //         localStorage.setItem('token', res.data.token)
        //         localStorage.setItem('username', res.data.username)

        //         setTimeout(() => {
        //             navigate('/home');
        //         }, 1000);
        //     })
        //     .catch((err) => {
        //         alert(err.response.data);
        //         clearForm();

        //     })


            // para futuro estudo
        // try {
        //     const response = await logIn(body)

        //     if (response.status === 201) {
        //         localStorage.setItem('token', res.data.token)
        //         localStorage.setItem('username', res.data.username)

        //         setTimeout(() => {
        //             navigate('/home');
        //         }, 1000);
        //     }

        // } catch (error) {
        //     console.error(error)
        // }

        navigate('/home')


    }

    return (

        <SinginWrapper>
            <HomeTitle>Vinil Store</HomeTitle>
            
            <FormWrapper onSubmit={sendForm}>
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

                <ConfirmButton type='submit'>
                    Entrar
                </ConfirmButton>

            </FormWrapper>

            <MiniWrapper>
                <Link to='/signup'>Primeira vez? Cadastre-se</Link>
            </MiniWrapper>
        </SinginWrapper>

    );

}


const SinginWrapper = styled.div`
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

const InputLogin = styled.input`
width: 87vw;
height: 8vh;
border-radius:5px;
margin-bottom: 13px;
color: #000;
font-size: 26px;
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

const FormWrapper = styled.form`
width: 87vw;
`
