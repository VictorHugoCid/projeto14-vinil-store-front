import styled from "styled-components";
import { useContext } from "react";
import GlobalContext from "../../Context/globalContext";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../Services/api";
import getConfig from "../../Services/getConfig";

export default function BoxSignIn() {
    const navigate = useNavigate()
    const { isShownSignIn, setIsShownSignIn, setIsShownCart } = useContext(GlobalContext);

    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");

    function logOut() {
        signOut(getConfig(token));
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        navigate("/signin");
    }

    return (

        <>
            {username ? (
                <BoxSignInWrapper
                    onMouseEnter={() => setIsShownSignIn(true)}
                    onMouseLeave={() => setIsShownSignIn(false)}
                    isShownSignIn={isShownSignIn}
                >
                    <SignOut onClick={logOut}>
                        Sign-out
                    </SignOut >

                </BoxSignInWrapper>

            ) : (
                <BoxSignInWrapper
                    onMouseEnter={() => {
                        setIsShownCart(false)
                        setIsShownSignIn(true)
                    }}
                    onMouseLeave={() => setIsShownSignIn(false)}
                    isShownSignIn={isShownSignIn}
                >
                    <SignIn >
                        <Link to='/signin'>
                            Sign-in
                        </Link>
                    </SignIn>

                    <SignUp >
                        <Link to='/signup'>
                            Sign-up
                        </Link>
                    </SignUp>


                </BoxSignInWrapper>
            )}
        </>
    )




}

const BoxSignInWrapper = styled.div`
width: ${props => props.isShownSignIn ? '100px' : '0px'};
height: ${props => props.isShownSignIn ? '100px' : '0px'};
top: 60px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
background-color: #03045e;
opacity: 0.95;
position: fixed;
top: ${props => props.isShownSignIn ? '60px' : '30px'};
right: ${props => props.isShownSignIn ? '50px' : '80px'};
opacity: ${props => props.isShownSignIn ? 0.98 : 0};
z-index: 3;
transition: all 0.3s ease-in;

border-radius: 10px;
box-shadow: 2px 4px 4px 2px rgba(202, 240, 248, 0.8);
`
const SignIn = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #caf0f8;

:hover{
    cursor: pointer;
}
`
const SignUp = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #caf0f8;
:hover{
    cursor: pointer;
}
`
const SignOut = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #caf0f8;

:hover{
    cursor: pointer;
}
`