import styled from "styled-components";
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import GlobalContext from "../../Context/globalContext";
import { useContext, useState } from "react";

import BoxSignIn from "./BoxSignIn";
import HeaderCart from "./HeaderCart";
import { verifySession } from "../../Services/api";
import getConfig from "../../Services/getConfig";


export default function Header() {

    const { token, isShown, setIsShown, isShownSignIn, setIsShownSignIn, isShownCart, setIsShownCart } = useContext(GlobalContext);
    const [ username, setUsername ] = useState("");   
    if (token) {
        async function xy () {
            try {
                const session = await verifySession(getConfig(token));
                setUsername(session.data.username);
                console.log(username);
            } catch (error) {
                console.log(error)
                alert(error.response.data);
            }
        }
        
        xy();
    } else {
        username = "! Login."
        console.log(username)
    }

    console.log(username);
    return (
        <HeaderWrapper>
            <BoxSignIn username={username} />
            <HeaderCart />
            <MenuIcon
                onMouseEnter={() => setIsShown(true)}
            // onMouseLeave={() => setIsShown(false)}
            >
                <AiOutlineMenu
                    color='#11111b' size='30px'
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
                    {`Hello, ${username}!`}
                </Link>

                <FaShoppingCart
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