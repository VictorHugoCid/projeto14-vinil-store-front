import styled from "styled-components";
import { FaCartPlus } from 'react-icons/fa'
import GlobalContext from "../../Context/globalContext";
import { useContext, useState } from "react";
import { addProduct } from "../../Services/api";
import getConfig from "../../Services/getConfig";

export default function Product({ product }) {

    const {renderCart, setRenderCart } = useContext(GlobalContext);
    const [clicked, setClicked] = useState(false)

    const token = localStorage.getItem('token')

    function addToCart(){
        const promise = addProduct(product, getConfig(token));

        promise
        .then(res => setRenderCart(!renderCart))
        .catch(err => alert(err.response.data))
    }

    return (
        <ProductWrapper onClick={()=>(
            addToCart(),
            setClicked(!clicked)
            )}>
            <ImgWrapper src={product.img} />
            <MiniWrapper>
                <h1>{product.name}</h1>
                <h2>{product.artist}</h2>
                <PriceWrapper clicked={clicked}>
                    <span>R${product.price}</span>
                    <button >
                        <FaCartPlus 
                        size='25px'
                        />
                    </button>
                </PriceWrapper>

            </MiniWrapper>

        </ProductWrapper>
    )
}

const ProductWrapper = styled.div`
width: 180px;
max-width: 180px;
height: 250px;
max-height: 250px;
padding:10px;
box-shadow: 2px 2px 8px 2px rgba(255, 255, 255, 0.8);
border-radius: 8px;

display: flex;
flex-direction: column;
align-items: center;

margin: 20px 10px 0 10px;

display: flex;
/* justify-content: center;
align-items: center; */
overflow-y: scroll;

:hover{
    cursor: pointer;
    border: 2px solid #caf0f8;
}

background-color: #caf0f8;


-ms-overflow-style: none;
scrollbar-width: none;
`
const ImgWrapper = styled.img`
width: 160px;
height: 150px;
border: none;

background-color: #caf0f8;

`
const MiniWrapper = styled.div`
width: 160px;
height: 80px;
padding: 5px;

position: relative;

background-color: #caf0f8;

h1{
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #03045e;
}

h2{
    font-size: 10px;
    color:gray;
}


`
const PriceWrapper = styled.div`
width: 150px;

position: absolute;
bottom: 3px;

display: flex;
justify-content: space-between;
align-items: center;
color:#03045e;

button{
    color: ${props=>props.clicked ? 'green' : '#03045e'};
}

`

