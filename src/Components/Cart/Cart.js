import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import getConfig from "../../Services/getConfig";
import { getCart, checkOut, setMarked } from "../../Services/api"
import GlobalContext from "../../Context/globalContext";
import { useNavigate } from "react-router-dom";

import CartProduct from "./CartProduct";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

export default function Cart() {

    let navigate = useNavigate();
    const { renderCart, reRender, setReRender } = useContext(GlobalContext);
    const token = localStorage.getItem("token");
    const [cart, setCart] = useState([]);
    let total = 0

    for (let k = 0; k < cart.length; k++) {
        total += Number(cart[k].price.replace(",", ".")) * cart[k].qtd;
    }

    useEffect(() => {

        const userCart = getCart(getConfig(token))
        userCart
            .then((res) => {
                setCart(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })

    }, [renderCart])

    function finish() {

        if(window.confirm('Confirmar compra')){

            const body = {total};
            const promise = checkOut(body, getConfig(token))
        
            promise
                .then(res => {
                    cart.map(item => {
                        const body = {_id: item.productId, clicked: true}
                        setMarked(item._id, body, getConfig(token))
                    });
                    const sale = res.data;
                    navigate('/success', {state: {sale}})
                })
                .catch(err=>{
                    console.log(err.message)
                })
        }

    }


    

    return (
        <>
            {cart.length === 0 ? (
                <>
                    <Header />
                    <Menu />

                    <Wrapper>
                        <CartWrapper cart={cart.length}>
                            <p>Nenhum item adicionado ao carrinho!</p>
                        </CartWrapper>

                    </Wrapper>
                </>
            ) : (
                <>
                    <Header />
                    <Menu />

                    <Wrapper>
                        <CartWrapper cart={cart.length}>
                            {cart.map((value, index) =>
                                <CartProduct
                                    key={index}
                                    product={value}
                                />
                            )}
                            <CheckOut >
                                <h1>Total</h1>
                                <h1>{Number(total).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</h1>
                            </CheckOut>
                            <Buy onClick={finish}>
                                Finalizar compra
                            </Buy>
                        </CartWrapper>

                    </Wrapper>
                </>
            )}
        </>
    )
}

const Wrapper = styled.div`
width: 100vw;
height: auto;
min-height: 100vh;


background-color: #03045e;

display: flex;
justify-content: center;

`
const CartWrapper = styled.div`
width: 87vw;
/* min-height: 100px; */
min-height: 100vh;
height: 100%;
padding-bottom: 50px;

background-color:  #023e8a ;
margin-top: 60px;

display: flex;
flex-direction: column;
justify-content: ${props=> props.cart === 0 ? 'center': 'flex-start'};
align-items: center;
flex-wrap: wrap;

p{
    color: #caf0f8;
    font-size: 32px;

}

`
const CheckOut = styled.div`
width: 70vw;
height: 30px;
background-color: #caf0f8;
margin-top: 10px;
padding: 5px;

display: flex;

align-items: center;
justify-content: space-between;
`
const Buy = styled.button`
width: 200px;
height: 40px;
background-color:#caf0f8;
margin-top: 30px;

display: flex;
justify-content: center;
align-items: center;

cursor: pointer;

`

