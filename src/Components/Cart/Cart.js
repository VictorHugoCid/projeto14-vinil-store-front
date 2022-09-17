import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import getConfig from "../../Services/getConfig";
import { getCart } from "../../Services/api"
import GlobalContext from "../../Context/globalContext";

import CartProduct from "./CartProduct";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

export default function Cart() {

    const { token, reRender, setReRender } = useContext(GlobalContext);
    const [ cart, setCart] = useState([]);

    useEffect(() => {
        async function getItens () {

            try {
                const userCart = await getCart(getConfig(token));
                setCart(userCart.data);  
            } catch (error) {
                alert(error.response.data);
            }  
        }
        
        if (token) {
            getItens();
        }        
    }, [])

    if (cart.length === 0) {
        return (
            <>
            <Header />
            <Menu />

            <Wrapper>
                <CartWrapper>
                    <p>Nenhum item adicionado ao carrinho!</p>
                </CartWrapper>

            </Wrapper>
        </>
        )
    }


    let total = 0
    for (let k = 0; k < cart.length; k++) {
        total += Number(cart[k].price * cart[k].qtd);
    }

    return (
        <>
            <Header />
            <Menu />

            <Wrapper>
                <CartWrapper>
                    {cart.map((value, index) =>
                        <CartProduct
                            key={index}
                            product={value}
                            reRender={reRender}
                            setReRender={setReRender}
                        />
                    )}
                    <CheckOut >
                        <h1>Total</h1>
                        <h1>{Number(total).toLocaleString('pt-BR', {style:"currency", currency:"BRL"}) }</h1>
                    </CheckOut>
                </CartWrapper>

            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
width: 100vw;
height: auto;
min-height: 100vh;

background-color: #03045e;

display: flex;
justify-content: center;
`
const CartWrapper = styled.div`
width: 87vw;
min-height: 100px;
height: 100vh;

background-color:  #023e8a ;
margin-top: 60px;

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

p{
    color: #caf0f8;
}

`
const CheckOut = styled.div`
width: 70vw;
height: 20px;
background-color: #caf0f8;

display: flex;
align-items: center;
justify-content: space-between;
`
