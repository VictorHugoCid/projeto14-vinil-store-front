import styled from "styled-components";
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import GlobalContext from "../../Context/globalContext";
import { useContext, useState } from "react";

import BoxSignIn from "./BoxSignIn";
import HeaderCart from "./HeaderCart";
// import { verifySession } from "../../Services/api";
import getConfig from "../../Services/getConfig";


export default function Header() {

    const { isShown, setIsShown, isShownSignIn, setIsShownSignIn, isShownCart, setIsShownCart } = useContext(GlobalContext);
    
    const username = localStorage.getItem("username");

    let nameLogin;
    if (!username) {
        nameLogin = "! Login"
    }

    return (
        <HeaderWrapper>
            <BoxSignIn />
            <HeaderCart />
            <MenuIcon
                onMouseEnter={() => setIsShown(true)}
            >
                <AiOutlineMenu
                    size='30px'
                />
            </MenuIcon>
            <Title>
                Vinil-Store
            </Title>
            <Rigth>
                <Link
                    to='/signin'
                    onMouseEnter={() => {
                        setIsShownCart(false)
                        setIsShownSignIn(true)
                    }}
                >
                    {(username) ? (
                        `Hello, ${username}.`
                    ) : (
                        `Hello, ${nameLogin}.`
                    )}

                </Link>

                <FaShoppingCart
                    onMouseEnter={() => {
                        setIsShownSignIn(false)
                        setIsShownCart(true)
                    }}
                    margin-left='50px' color='#03045e' size='30px' />
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
background-color: #00b4d8;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.3);
border-radius: 8px;
`
const Rigth = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 12px;
a{
    margin-right: 10px;
    color: #03045e;

}

:hover{
    cursor: pointer;
}
`
const MenuIcon = styled.div`
color: #03045e;

:hover{
    color:#caf0f8;
    cursor: pointer;
}
`
const Title = styled.div`
width: 200px;
color: #03045e;
font-size: 26px;
display: flex;
justify-content: center;
align-items: center;
position:fixed;
left: calc(50% - 100px)
`