import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../Context/globalContext";
import { Link, useNavigate } from "react-router-dom";
import { getCart } from "../../Services/api";
import getConfig from "../../Services/getConfig";

export default function HeaderCart() {
    const navigate = useNavigate()
    const { renderCart, isShownCart, setIsShownCart, setIsShownSignIn } = useContext(GlobalContext);
    const [cart, setCart] = useState([]);
    const token = localStorage.getItem('token')

    useEffect(() => {

        const promisse = getCart(getConfig(token))
            .then((res) => {
                setCart(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [renderCart]);

    if (!token) {
        return (
            <CartWrapper
                onMouseEnter={() => setIsShownCart(true)}
                onMouseLeave={() => setIsShownCart(false)}
                isShownCart={isShownCart}
            >
                <BoxCart >
                    Usuário não logado!
                </BoxCart>
            </CartWrapper>
        )
    }

    const prices = cart.map((item) => Number(item.price.replace(",", ".")));

    const totalPrice = prices.reduce((prev, curr) => prev + curr, 0);

    //UI
    return (
        <>
            {(cart.length === 0) ? (
                <CartWrapper
                    onMouseEnter={() => setIsShownCart(true)}
                    onMouseLeave={() => setIsShownCart(false)}
                    isShownCart={isShownCart}
                >
                    <BoxCart >
                        Carrinho vazio!
                    </BoxCart>
                </CartWrapper>
            ) : (
                <CartWrapper
                    onMouseEnter={() => setIsShownCart(true)}
                    onMouseLeave={() => setIsShownCart(false)}
                    isShownCart={isShownCart}
                >
                    <BoxCart >
                        {cart.map((item, index) => <CartItem name={item.name} img={item.img} price={item.price} key={index} />)}
                    </BoxCart>
                    <p>{totalPrice.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})}</p>
                    <Link to="/cart"><button>Concluir Compra</button></Link>
                </CartWrapper>
            )}
        </>
    )
}

function CartItem({ name, img, price }) {
    return (
        <ItemWrapper>
            <ImgWrapper src={img} />
            <MiniWrapper>
                <h1>{name}</h1>
                <PriceWrapper>
                    <span>R$ {price}</span>
                </PriceWrapper>
            </MiniWrapper>
        </ItemWrapper>
    )
}

const CartWrapper = styled.div`
width: ${props => props.isShownCart ? '200px' : '1px'} ;
min-height: ${props => props.isShownCart ? '200px' : '1px'} ;
top: 60px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 5px;
border-radius: 10px;
box-shadow: 2px 4px 4px 2px rgba(202, 240, 248, 0.8);

background-color: #03045e;
opacity: 0.95;

position: fixed;
top: 60px;
right: 0px;
opacity: ${props => props.isShownCart ? 0.98 : 0} ;
z-index: 1;
transition: all 0.5s ease-in;
p {
    font-weight: 700;
    color: #caf0f8;
    margin-bottom: 5px;
}

button{
    color: #caf0f8;
}
`
const BoxCart = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #caf0f8;

:hover{
    cursor: pointer;
}
`
const ItemWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
    padding: 5px;
    background-color: #caf0f8;
`
const ImgWrapper = styled.img`
width: 60px;
height: 60px;
border: none;
background-color: #caf0f8;
`
const MiniWrapper = styled.div`
width: 120px;
height: 60px;
padding: 5px;
position: relative;
background-color:  #caf0f8;
h1{
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
    color:#03045e;
}
h2{
    font-size: 12px;
    color:#03045e;
}
div{
}
`
const PriceWrapper = styled.div`
width: 150px;
position: absolute;
bottom: 3px;
display: flex;
justify-content: space-between;
font-size: 12px;
color:#03045e;
`