import styled from "styled-components";
import { useEffect, useState } from "react";
import getConfig from "../../Services/getConfig";
import { getCart } from "../../Services/api"

import CartProduct from "./CartProduct";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

export default function Cart() {

    const array = [
        {
            name: 'Cartola -1976 -Série Clássicos',
            img: 'https://m.media-amazon.com/images/I/71U7Zyq15bL._AC_SL1500_.jpg',
            price: '150.00',
            artist: 'Cartola'

        }, {
            name: 'Samba pras moças',
            img: 'https://m.media-amazon.com/images/I/71L6ZGLcYmS._AC_SL1000_.jpg',
            price: '158.50',
            artist: 'Zeca Pagodinho',

        },
    ];
    const [reRender, setReRender] = useState(false)
    const token = localStorage.getItem('token');


    useEffect(() => {
        // const promise = getCart(getConfig(token));
    }, [reRender])

    let total = 0
    for (let k = 0; k < array.length; k++) {
        total += Number(array[k].price)
    }


    return (
        <>
            <Header />
            <Menu />

            <Wrapper>
                <CartWrapper>
                    {array.map((value, index) =>
                        <CartProduct
                            key={index}
                            product={value}
                            reRender={reRender}
                            setReRender={setReRender}
                        />
                    )}
                    <CheckOut >
                        <h1>Total</h1>
                        <h1>R$ {total.toFixed(2)}</h1>
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
