import styled from "styled-components";
import { BsCartCheckFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import GlobalContext from "../../Context/globalContext";
import { useContext } from "react";

import BoxSignIn from "./BoxSignIn";
import Cart from "./Cart";


export default function Header() {

    const navigate = useNavigate()
    const { isShown, setIsShown, isShownSignIn, setIsShownSignIn, isShownCart, setIsShownCart } = useContext(GlobalContext);



    return (
        <HeaderWrapper>
            <BoxSignIn />
            <Cart />
            <MenuIcon
                onMouseEnter={() => setIsShown(true)}
            // onMouseLeave={() => setIsShown(false)}
            >
                <AiOutlineMenu
                    color='#11111b' size='30px'
                />
            </MenuIcon>

            <Title>
                Header

            </Title>
            <Rigth>

                <Link
                    to='/signin'
                    onMouseEnter={() => {
                        setIsShownCart(false)
                        setIsShownSignIn(true)
                    }}
                >
                    Hello, sign-in.
                </Link>

                <BsCartCheckFill
                    onMouseEnter={() => {
                        setIsShownSignIn(false)
                        setIsShownCart(true)
                    }}
                    margin-left='50px' color='#11111b' size='30px' />
            </Rigth>


        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
width: 100%;
height: 60px;
padding: 15px;


display: flex;
justify-content: space-between;
align-items: center;

position: fixed;
z-index: 1;


background-color: #fab387;
`

const Rigth = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

font-size: 12px;

a{
    margin-right: 10px;
}


:hover{
    cursor: pointer;
}

`

const MenuIcon = styled.div`

:hover{
    color:red;
    cursor: pointer;
}

`
const Title = styled.div`
width: 200px;

display: flex;
justify-content: center;
align-items: center;

position:fixed;
left: calc(50% - 100px)
`
