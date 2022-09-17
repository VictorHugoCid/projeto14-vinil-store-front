import styled from "styled-components";

import Header from "../Header/Header";
export default function Succes() {

    // vai entrar aqui um novo "token" como "número do pedido"
    // e uma msg bonitinho


    return (
        <>
            <Header />
            <Wrapper>
                <SuccesWrapper>
                    <h1>Obrigado, eu pedido foi confirmado</h1>
                    <h2>XXXXXXXXX CÓDIGO DO PEDIDO XXXXXXXXX</h2>
                </SuccesWrapper>
            </Wrapper>
        </>

    )
}

const Wrapper = styled.div`
width: 100vw;
height: 100vh;

background: #03045e;

display: flex;
justify-content: center;
align-items: center;
`
const SuccesWrapper = styled.div`
width: 87vw;
height: 60vh;

background-color: #caf0f8;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{
    font-size: 28px;
    margin-bottom: 10px;
    color: #03045e;
}
h2{
    color: #03045e;
}
`