import styled from "styled-components";
import { useContext } from "react";
import GlobalContext from "../../Context/globalContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate()
    const { isShownCart, setIsShownCart } = useContext(GlobalContext);



    return (

        <BoxSignInWrapper
            onMouseEnter={() => setIsShownCart(true)}
            onMouseLeave={() => setIsShownCart(false)}
            isShownCart={isShownCart}
        >
            <BoxCart >
                {/* vai receber um axios 
                com a lista do carrinho */}
                
            </BoxCart>




        </BoxSignInWrapper>
    )
}

const BoxSignInWrapper = styled.div`
width: ${props => props.isShownCart ? '200px' : '1px'} ;
height: ${props => props.isShownCart ? '200px' : '1px'} ;
top: 60px;

display: flex;
flex-direction: column;
justify-content: space-evenly;

background-color: #cdd6f4;
opacity: 0.95;

position: fixed;
top: 60px;
right: 0px;
opacity: ${props => props.isShownCart ? 0.98 : 0} ;
z-index: 1;

transition: all 0.5s ease-in;

`

const BoxCart = styled.div`

display: flex;
justify-content: center;
align-items: center;

:hover{
    cursor: pointer;
}

`
