import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";

export default function Succes() {
    let location = useLocation();
    const { sale } = location.state; 
    const items = JSON.parse(sale.cart)
    console.log(items)

    function SaleItem ({name, img, price, qtd}){
        return (
            <ItemWrapper>
                <img src={img} alt={`${name} album cover`}/>
                <p>{name}</p>
            </ItemWrapper>
        )
    } 

    return (
        <>
            <Header />
            <Wrapper>
                
                <SuccesWrapper>
                    <h1>Obrigado, seu pedido foi confirmado!</h1>
                    <h2>XXXXXXXXX {sale._id} XXXXXXXXX</h2>

                    <CartItems>
                        {items.map(item => <SaleItem 
                        name={item.name} 
                        img={item.img}
                        price={item.price}
                        qtd={item.qtd} />)}
                    </CartItems>
                </SuccesWrapper>
                
            </Wrapper>
        </>

    )
}

const Wrapper = styled.div`
width: 100vw;
height: 100vh;

background: #03045e;

display: flex;
flex-direction: column;
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
padding: 10px;
border-radius: 5px;

    h1 {
        font-size: 28px;
        margin-bottom: 10px;
        color: #03045e;
    }

    h2 {
        color: #03045e;
        border-bottom: 1px solid #03045e;
        text-align: center;
        padding-bottom: 25px;
        width: 100%;
    }
`
const CartItems = styled.div`
    margin-top: 15px;
`
const ItemWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;

    img {
        width: 80px;
        height: 80px;
        margin-right: 15px;
    }

    p {
    font-size: 15px;
    font-weight: 700;
    color: #03045e;
    }
`