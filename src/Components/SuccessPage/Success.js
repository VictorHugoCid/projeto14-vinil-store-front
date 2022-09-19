import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header";
export default function Succes() {

let location = useLocation();
const { _id, cart } = location.state.sale;
const deserializedCart = JSON.parse(cart);
console.log(deserializedCart);

    return (
        <>
            <Header />
            <Wrapper>
                <SuccesWrapper>
                    <h1>Obrigado, seu pedido foi confirmado!</h1>
                    <h2>{_id}</h2>

                    <CartWrapper>
                        {deserializedCart.map((item, index) => <ItemsWrapper name={item.name} img={item.img} key={index}/>)}
                    </CartWrapper>
                </SuccesWrapper>
            </Wrapper>
        </>

    )

    function ItemsWrapper ({name, img}) {
        return (
            <ItemWrapper>
                <img src={img} alt={`${name} album cover`}/>
                <p>{name}</p>
            </ItemWrapper>
        )
    }
}

const Wrapper = styled.div`
width: 100vw;
height: 100vh;

background: #03045e;

display: flex;
justify-content: center;
align-items: center;
`
const SuccesWrapper = styled.div`

width: 87vw;
min-height: 60vh;
border-radius: 5px;
box-sizing: border-box;
padding: 15px;

background-color: #caf0f8;

display: flex;
flex-direction: column;

align-items: center;

    h1 {
        font-size: 28px;
        margin-bottom: 10px;
        color: #03045e;
    }

    h2{
        color: #03045e;
        border-bottom: 1px solid #03045e;
        text-align: center;
        padding-bottom: 25px;
        width: 100%;
    }
`
const CartWrapper = styled.div`
    margin-top: 25px;
`
const ItemWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;

    img {
        height: 60px;
        width: 60px;
        margin-right: 15px;
    }

    p {
        font-size: 20px;
        font-weight: 700;
        color: #03045e;
    }
`