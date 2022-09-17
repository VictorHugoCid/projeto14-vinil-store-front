import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../Context/globalContext";
import { Link, useNavigate } from "react-router-dom";
import { getCart } from "../../Services/api";
import getConfig from "../../Services/getConfig";

export default function HeaderCart() {
    const navigate = useNavigate()
    const { token, renderCart, isShownCart, setIsShownCart, setIsShownSignIn } = useContext(GlobalContext);
    const [cart, setCart] = useState([]);

    useEffect (() => {
        async function getItens () {

            try {
                const userCart = await getCart(getConfig(token));
                setCart(userCart.data);  
            } catch (error) {
                alert(error.response.data);
            }  
        }
        
        if (token) {
            getItens();
        }        
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
    
    /* const cart = [
        {
            name: 'Alerta geral',
            img: 'https://s3.amazonaws.com/vinils3/wp-content/uploads/2016/10/Alcione_alerta-geral_01-300x300.jpg',
            price: '150,00',
            artist: 'Alcione',
            type: 'samba',
            qtd: 1,
    
        }, {
            name: ' Elis & Tom',
            img: 'https://imusic.b-cdn.net/images/item/original/829/0042282441829.jpg?regina-elis-antonio-ca-2008-elis-tom-cd&class=original',
            price: '150,00',
            artist: 'Elis Regina e Tom Jobim',
            type: 'samba',
            qtd: 1,
        },{
            name: ' Elis & Tom',
            img: 'https://imusic.b-cdn.net/images/item/original/829/0042282441829.jpg?regina-elis-antonio-ca-2008-elis-tom-cd&class=original',
            price: '150,00',
            artist: 'Elis Regina e Tom Jobim',
            type: 'samba',
            qtd: 1,
        },{
            name: ' Elis & Tom',
            img: 'https://imusic.b-cdn.net/images/item/original/829/0042282441829.jpg?regina-elis-antonio-ca-2008-elis-tom-cd&class=original',
            price: '150,00',
            artist: 'Elis Regina e Tom Jobim',
            type: 'samba',
            qtd: 1,
        },
    ] */
 
    const prices = cart.map((item) => Number(item.price));
    const totalPrice = prices.reduce((prev, curr) => prev + curr, 0);

     //UI
     if (cart.length === 0) {
        return (
            <CartWrapper
                onMouseEnter={() => setIsShownCart(true)}
                onMouseLeave={() => setIsShownCart(false)}
                isShownCart={isShownCart}
            >
                <BoxCart >
                    Carrinho vazio!  
                </BoxCart>
            </CartWrapper>
        )
     } else {
        return (
            <CartWrapper
                onMouseEnter={() => setIsShownCart(true)}
                onMouseLeave={() => setIsShownCart(false)}
                isShownCart={isShownCart}
            >
                <BoxCart >
                    { cart.map((item, index) => <CartItem name={item.name} img={item.img} price={item.price} key={index} />) }
                </BoxCart>
                <p>R$ {totalPrice}</p>
                <Link to="/cart"><button>Concluir Compra</button></Link>
            </CartWrapper>
        )
     }
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
background-color: #cdd6f4;
opacity: 0.95;
position: fixed;
top: 60px;
right: 0px;
opacity: ${props => props.isShownCart ? 0.98 : 0} ;
z-index: 1;
transition: all 0.5s ease-in;
    p {
        font-weight: 700;
    }
`
const BoxCart = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
:hover{
    cursor: pointer;
}
`
const ItemWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
`
const ImgWrapper = styled.img`
width: 80px;
height: 80px;
border: none;
background-color: aliceblue;
`
const MiniWrapper = styled.div`
width: 80px;
height: 80px;
padding: 5px;
position: relative;
background-color: aliceblue;
h1{
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
}
h2{
    font-size: 10px;
    color:gray;
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
`