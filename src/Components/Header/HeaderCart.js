import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../Context/globalContext";
import { Link, useNavigate } from "react-router-dom";
import { getCart } from "../../Services/api";
import getConfig from "../../Services/getConfig";

export default function HeaderCart() {
    const navigate = useNavigate()
    const { isShownCart, setIsShownCart } = useContext(GlobalContext);
    const [cartList, setCartList] = useState([]);

    const token = localStorage.getItem("token");
    let cartContent;

    useEffect (() => {

        async function getItens () {
            try {
                cartContent = await getCart(getConfig(token));
                setCartList(cartContent);
            } catch (error) {
                console.log("Impossível mostrar itens")
            }  
        }
        
        if (token) {
            getItens();
        }        
    }, [/*adicionar variável que muda quando algum item for removido ou adicionado ao carrinho*/]);

    //UI
    if (!token) {
        cartContent = "Usuário não logado!";

        return (

            <BoxSignInWrapper
                onMouseEnter={() => setIsShownCart(true)}
                onMouseLeave={() => setIsShownCart(false)}
                isShownCart={isShownCart}
            >
                <BoxCart >
                    {cartContent}   
                </BoxCart>
            </BoxSignInWrapper>
        )
    }

    if (cartList.length === 0) {
        cartContent = "Carrinho vazio!"
    } else {
        cartContent = cartList
    }


    if (cartContent !== cartList) {
        return (

            <BoxSignInWrapper
                onMouseEnter={() => setIsShownCart(true)}
                onMouseLeave={() => setIsShownCart(false)}
                isShownCart={isShownCart}
            >
                <BoxCart >
                    {cartContent}   
                </BoxCart>
            </BoxSignInWrapper>
        )
    } else {
        return (

            <BoxSignInWrapper
                onMouseEnter={() => setIsShownCart(true)}
                onMouseLeave={() => setIsShownCart(false)}
                isShownCart={isShownCart}
            >
                <BoxCart >
                    {/*{cartContent.map((item) => <cartItem title={title} cover={cover} price={price}/>)};*/}
                </BoxCart>
                {/*VALOR TOTAL DOS ITENS*/};    
            </BoxSignInWrapper>
        )
    }
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
