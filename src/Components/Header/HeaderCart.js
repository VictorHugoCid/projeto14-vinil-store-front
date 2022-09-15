import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../Context/globalContext";
import { Link, useNavigate } from "react-router-dom";
import getConfig from "../../Services/getConfig";

export default function HeaderCart() {
    const navigate = useNavigate()

    const { isShownCart, setIsShownCart,setIsShownSignIn } = useContext(GlobalContext);
    const cart = JSON.parse(localStorage.getItem("cart"));
    const token = localStorage.getItem("token");

   /* useEffect (() => {
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
    }, []);    
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
    } else {    */

        const prices = cart.map((item) => Number(item.price));
        const totalPrice = prices.reduce((prev, curr) => prev + curr, 0);
        return (

            <BoxSignInWrapper
                onMouseEnter={() => setIsShownCart(true)}
                onMouseLeave={() => setIsShownCart(false)}
                isShownCart={isShownCart}
            >
                <BoxCart >
                    {cart.map((item, index) => <CartItem name={item.name} img={item.img} price={item.price} key={index}/>)}
                </BoxCart>
                <p>R$ {totalPrice}</p>
                <Link to="/cart"><button>Concluir Compra</button></Link>
            </BoxSignInWrapper>
        )
}      

function CartItem ({name, img, price}) {
    return (
        <ItemWrapper>
            <ImgWrapper src={img} />
            <MiniWrapper>
                <h1>{name}</h1>
                <PriceWrapper>
                    <span>R$ {price}</span>
                </PriceWrapper>


        <BoxSignInWrapper
            onMouseEnter={() => {
                setIsShownSignIn(false)
                setIsShownCart(true)}}
            onMouseLeave={() => setIsShownCart(false)}
            isShownCart={isShownCart}
        >
            <BoxCart >
                {/* vai receber um axios 
                com a lista do carrinho */}
                
            </BoxCart>




        </BoxSignInWrapper>

            </MiniWrapper>
        </ItemWrapper>
    )
}

const BoxSignInWrapper = styled.div`
width: ${props => props.isShownCart ? '200px' : '1px'} ;
height: ${props => props.isShownCart ? '200px' : '1px'} ;
top: 60px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 5px;
background-color: #cdd6f4;
opacity: 0.95;
position: fixed;
top: 60px;
right: 0px;
opacity: ${props => props.isShownCart ? 0.98 : 0} ;
z-index: 1;
transition: all 0.5s ease-in;
    p {
        font-weight: 700;
    }
`
const BoxCart = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
:hover{
    cursor: pointer;
}
`
const ItemWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
`
const ImgWrapper = styled.img`
width: 80px;
height: 80px;
border: none;
background-color: aliceblue;
`
const MiniWrapper = styled.div`
width: 80px;
height: 80px;
padding: 5px;
position: relative;
background-color: aliceblue;
h1{
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
}
h2{
    font-size: 10px;
    color:gray;
}
div{
}
`
const PriceWrapper = styled.div`
width: 150px;
position: absolute;
bottom: 3px;
display: flex;
justify-content: space-between;
`