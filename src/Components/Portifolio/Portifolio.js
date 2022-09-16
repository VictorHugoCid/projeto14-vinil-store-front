import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPortifolio } from "../../Services/api";
import getConfig from "../../Services/getConfig"

import Product from "../Product/Product";

export default function Portifolio() {

    const [array, setArray] = useState([]);
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
                <Product key={index} product={value}/>
            ) }
        </PortifolioWrapper>
    )
}

const PortifolioWrapper = styled.div`
width: 87vw;
height: 100vh;
margin-top: 60px;
padding-bottom: 100px;

display: flex;
justify-content: center;
flex-wrap: wrap;

overflow-y: scroll;

background-color: #cba6f7;
position: fixed;

-ms-overflow-style: none;
scrollbar-width: none;

`