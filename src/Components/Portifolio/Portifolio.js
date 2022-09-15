import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPortifolio } from "../../Services/api";
import getConfig from "../../Services/getConfig"

import Product from "../Product/Product";

export default function Portifolio() {

    const [array, setArray] = useState([]);

    // const array = [
    //     {
    //         name: 'Alerta geral',
    //         img: 'https://s3.amazonaws.com/vinils3/wp-content/uploads/2016/10/Alcione_alerta-geral_01-300x300.jpg',
    //         price: '150,00',
    //         artist: 'Alcione',
    //         type:'samba',
    //         qtd: 1,
    
    //     }, {
    //         name: ' Elis & Tom',
    //         img: 'https://imusic.b-cdn.net/images/item/original/829/0042282441829.jpg?regina-elis-antonio-ca-2008-elis-tom-cd&class=original',
    //         price: '150,00',
    //         artist: 'Elis Regina e Tom Jobim',
    //         qtd: 1,
    //     },{
    //         name: 'Toquinho',
    //         img: 'https://m.media-amazon.com/images/I/817HTXclWAL._AC_SL1500_.jpg',
    //         price: '150,00',
    //         artist: 'Toquinho',
    //         type:'samba',
    //         qtd: 1,
    //     },{
    //         name: 'Samba esquema novo',
    //         img: 'https://imusic.b-cdn.net/images/item/original/875/7427251606875.jpg?jorge-ben-2022-samba-esquema-novo-coloured-vinyl-lp&class=original',
    //         price: '150,00',
    //         artist: 'Jorgen Ben',
    //         type:'samba',
    //         qtd: 1,
    //     },{
    //         name: 'Estudando o samba ',
    //         img: 'https://m.media-amazon.com/images/I/71h2lkMVDaL._AC_SL1500_.jpg',
    //         price: '150,00',
    //         artist: 'Tom Zé',
    //         type:'samba',
    //         qtd: 1,
    //     },{
    //         name: 'Cartola -1976 -Série Clássicos',
    //         img: 'https://m.media-amazon.com/images/I/71U7Zyq15bL._AC_SL1500_.jpg',
    //         price: '150,00',
    //         artist: 'Cartola',
    //         type:'samba',
    //         qtd: 1,
    
    //     }, {
    //         name:'Samba pras moças',
    //         img:'https://m.media-amazon.com/images/I/71L6ZGLcYmS._AC_SL1000_.jpg',
    //         price:'158,00',
    //         artist:'Zeca Pagodinho',
    //         type:'samba',
    //         qtd: 1,
    
    //     },{
    //         name: 'Só danço samba',
    //         img: 'https://m.media-amazon.com/images/I/51QTGySfzML._UX358_FMwebp_QL85_.jpg',
    //         price: '150,00',
    //         artist: 'Emilio Santiago',
    //         type:'samba',
    //         qtd: 1,
    //     }
    // ];
    const token = localStorage.getItem('token');

    useEffect(() =>{
        const promise = getPortifolio(getConfig(token))
            .then((res)=>{
                setArray(res.data)

            })
    },[])

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