import styled from "styled-components";
import { useEffect, useState } from "react";
import getConfig from "../../Services/getConfig";
import { deleteProduct } from "../../Services/api";



export default function CartProduct({ product }) {

    const token = localStorage.getItem('token');

    function deleteIten() {
        const promise = deleteProduct(product.id, getConfig(token))
    }

    const [qtd, setQtd] = useState(1);
    
    function handleInput(e) {
        setQtd(e.target.value);
    }

    return (

        <ProductWrapper>
            <img src={product.img} />
            <TextWrapper>
                <h1>{product.name}</h1>
                <h2>{product.artist}</h2>
                <h3>{product.price.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})}</h3>
            </TextWrapper>
            <Funcs>
                <AddDelete>
                    <input
                        onChange={handleInput}
                        type='number'
                        value={qtd}
                        min="1" />
                    <p onClick={deleteIten}>
                        Delete
                    </p>

                </AddDelete>
                <PriceWrapper>
                    {product.price.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})}
                </PriceWrapper>
            </Funcs>
        </ProductWrapper>




    )
}

const ProductWrapper = styled.div`
width: 70vw;
height: 160px;
margin-top: 10px;
padding: 10px;

background-color: aliceblue;

display: flex;
justify-content: flex-start;

img{
    margin-right: 15px;
}
`

const TextWrapper = styled.div`
width: 30vw;
height: 100%;

background-color: aliceblue;

h1{
    margin-bottom: 10px;
}

h2{
    font-size: 12px;
    color: grey;

}
`

const Funcs = styled.div`
width: 100%;
height: 100%;

background-color: lightsalmon;

display: flex;
justify-content: flex-end;
`

const AddDelete = styled.div`
width: 10vw;
height: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background-color:green /* aliceblue */;

input{
    width: 50px;
    height: 30px;
    margin-bottom: 15px;
}

`

const PriceWrapper = styled.div`
width: 12vw;
height: 100%;
margin-left: 10px;

display: flex;
justify-content: center;
align-items: center;
background-color: lightblue;

`
