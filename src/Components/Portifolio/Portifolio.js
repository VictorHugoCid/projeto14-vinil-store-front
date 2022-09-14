import styled from "styled-components";
import Product from "../Product/Product";

export default function Portifolio() {

    const array = [
        {
            name: 'Cartola -1976 -Série Clássicos',
            img: 'https://m.media-amazon.com/images/I/71U7Zyq15bL._AC_SL1500_.jpg',
            price: '150,00',
            artist: 'Cartola'

        }, {
            name:'Samba pras moças',
            img:'https://m.media-amazon.com/images/I/71L6ZGLcYmS._AC_SL1000_.jpg',
            price:'158,00',
            artist:'Zeca Pagodinho',

        },{
            name: 'Cartola -1976 -Série Clássicos',
            img: 'https://m.media-amazon.com/images/I/71U7Zyq15bL._AC_SL1500_.jpg',
            price: '150,00',
            artist: 'Cartola'

        }, {
            name:'Samba pras moças',
            img:'https://m.media-amazon.com/images/I/71L6ZGLcYmS._AC_SL1000_.jpg',
            price:'158,00',
            artist:'Zeca Pagodinho',

        },{
            name: 'Cartola -1976 -Série Clássicos',
            img: 'https://m.media-amazon.com/images/I/71U7Zyq15bL._AC_SL1500_.jpg',
            price: '150,00',
            artist: 'Cartola'

        }, {
            name:'Samba pras moças',
            img:'https://m.media-amazon.com/images/I/71L6ZGLcYmS._AC_SL1000_.jpg',
            price:'158,00',
            artist:'Zeca Pagodinho',

        },{
            name: 'Cartola -1976 -Série Clássicos',
            img: 'https://m.media-amazon.com/images/I/71U7Zyq15bL._AC_SL1500_.jpg',
            price: '150,00',
            artist: 'Cartola'

        }, {
            name:'Samba pras moças',
            img:'https://m.media-amazon.com/images/I/71L6ZGLcYmS._AC_SL1000_.jpg',
            price:'158,00',
            artist:'Zeca Pagodinho',

        },
    ];

    return (

        <PortifolioWrapper>
            {array.map((value, index) =>
                <Product key={index} product = {value}/>
            ) }
        </PortifolioWrapper>
    )
}

const PortifolioWrapper = styled.div`
width: 87vw;
height: 100vh;
margin-top: 60px;

display: flex;
justify-content: center;
flex-wrap: wrap;

overflow-y: scroll;

background-color: #cba6f7;
position: fixed;

-ms-overflow-style: none;
scrollbar-width: none;

`