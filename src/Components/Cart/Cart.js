import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import getConfig from "../../Services/getConfig";
import { getCart } from "../../Services/api"
import GlobalContext from "../../Context/globalContext";

import CartProduct from "./CartProduct";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

export default function Cart() {

    // const cart = JSON.parse(localStorage.getItem("cart"));

    const [reRender, setReRender] = useState(false)

    const cart = [
        {
            name: 'Alerta geral',
            img: 'https://s3.amazonaws.com/vinils3/wp-content/uploads/2016/10/Alcione_alerta-geral_01-300x300.jpg',
            price: 150,
            artist: 'Alcione',
            type: 'samba',
            qtd: 1,
    
        }, {
            name: ' Elis & Tom',
            img: 'https://imusic.b-cdn.net/images/item/original/829/0042282441829.jpg?regina-elis-antonio-ca-2008-elis-tom-cd&class=original',
            price: 147.50,
            artist: 'Elis Regina e Tom Jobim',
            type: 'samba',
            qtd: 1,
        }
    ]

    useEffect(() => {

        // const promise = getCart(getConfig(token));
    }, [reRender])

    if (cart.length === 0) {
        return (
            <>
            <Header />
            <Menu />

            <Wrapper>
                <CartWrapper>
                    Nenhum item adicionado ao carrinho!
                </CartWrapper>

            </Wrapper>
        </>
        )
    }


    let total = 0
    for (let k = 0; k < cart.length; k++) {
        total += Number(cart[k].price)
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

background-color: purple;

display: flex;
justify-content: center;
`
const CartWrapper = styled.div`
width: 87vw;
height: fit-content;

background-color:  #cba6f7 ;
margin-top: 60px;

display: flex;
justify-content: center;
flex-wrap: wrap;

`
const CheckOut = styled.div`
width: 70vw;
height: 20px;
background-color: grey;

display: flex;
align-items: center;
justify-content: space-between;
`
