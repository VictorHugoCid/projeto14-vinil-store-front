import styled from "styled-components";

import CartProduct from "./CartProduct";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

export default function Cart() {

    const array = [
        {
            name: 'Cartola -1976 -Série Clássicos',
            img: 'https://m.media-amazon.com/images/I/71U7Zyq15bL._AC_SL1500_.jpg',
            price: '150,00',
            artist: 'Cartola'

        }, {
            name: 'Samba pras moças',
            img: 'https://m.media-amazon.com/images/I/71L6ZGLcYmS._AC_SL1000_.jpg',
            price: '158,00',
            artist: 'Zeca Pagodinho',

        }, {
            name: 'Cartola -1976 -Série Clássicos',
            img: 'https://m.media-amazon.com/images/I/71U7Zyq15bL._AC_SL1500_.jpg',
            price: '150,00',
            artist: 'Cartola'

        }, {
            name: 'Samba pras moças',
            img: 'https://m.media-amazon.com/images/I/71L6ZGLcYmS._AC_SL1000_.jpg',
            price: '158,00',
            artist: 'Zeca Pagodinho',

        }, {
            name: 'Cartola -1976 -Série Clássicos',
            img: 'https://m.media-amazon.com/images/I/71U7Zyq15bL._AC_SL1500_.jpg',
            price: '150,00',
            artist: 'Cartola'

        }, {
            name: 'Samba pras moças',
            img: 'https://m.media-amazon.com/images/I/71L6ZGLcYmS._AC_SL1000_.jpg',
            price: '158,00',
            artist: 'Zeca Pagodinho',

        }, {
            name: 'Cartola -1976 -Série Clássicos',
            img: 'https://m.media-amazon.com/images/I/71U7Zyq15bL._AC_SL1500_.jpg',
            price: '150,00',
            artist: 'Cartola'

        }, {
            name: 'Samba pras moças',
            img: 'https://m.media-amazon.com/images/I/71L6ZGLcYmS._AC_SL1000_.jpg',
            price: '158,00',
            artist: 'Zeca Pagodinho',

        },
    ];


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
                        />

                    )}
                </CartWrapper>

            </Wrapper>
        </>


    )
}

const Wrapper = styled.div`
width: 100vw;
height: 100vh;

background-color: purple;

display: flex;
justify-content: center;
`


const CartWrapper = styled.div`
width: 87vw;
height: 100vh;
background-color: #cba6f7;
margin-top: 60px;

display: flex;
justify-content: center;
flex-wrap: wrap;
`

