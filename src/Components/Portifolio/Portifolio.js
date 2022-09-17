import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GlobalContext from "../../Context/globalContext";
import { getPortifolio } from "../../Services/api";
import getConfig from "../../Services/getConfig"

import Product from "../Product/Product";

export default function Portifolio() {

    const navigate = useNavigate()
    const [portfolio, setPortfolio] = useState([]);
    const {token, style, reRender} = useContext(GlobalContext);
    
    useEffect(() =>{
        getPortifolio(style, getConfig(token))
            .then((res)=>{
                setPortfolio(res.data)
                navigate('/home')
            })
    },[reRender]);

    return (

        <PortifolioWrapper>
            {portfolio.map((product, index) =>
                <Product key={index} product={product}/>
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