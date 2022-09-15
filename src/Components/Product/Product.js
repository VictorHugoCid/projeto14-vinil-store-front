import styled from "styled-components";
import { FaCartPlus } from 'react-icons/fa'

export default function Product({ product }) {

    function addToCart() {

        // VAI ENTRAR UM AXIOS.POST PRA INSERT NUMA COLLECTION('CART')
        // OU ARRAY COM LOCALSTORAGE

    }

    return (
        <ProductWrapper>
            <ImgWrapper src={product.img} />
            <MiniWrapper>
                <h1>{product.name}</h1>
                <h2>{product.artist}</h2>
                <PriceWrapper>
                    <span>R${product.price}</span>
                    <button >
                        <FaCartPlus />
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
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.3);
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
    border: 1px solid red;
}

background-color: #f38ba8;/* aliceblue */


-ms-overflow-style: none;
scrollbar-width: none;
`
const ImgWrapper = styled.img`
width: 160px;
height: 150px;
border: none;

background-color: aliceblue;

`

const MiniWrapper = styled.div`
width: 160px;
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

button{
    /* color: green; */
}


`

