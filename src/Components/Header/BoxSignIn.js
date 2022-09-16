import styled from "styled-components";
import { useContext } from "react";
import GlobalContext from "../../Context/globalContext";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../Services/api";
import getConfig from "../../Services/getConfig";

export default function BoxSignIn({ username }) {
    const navigate = useNavigate()
    const { token, setToken, isShownSignIn, setIsShownSignIn, setIsShownCart } = useContext(GlobalContext);

    if (username !== "! Login.") {
        return (

            <BoxSignInWrapper
                onMouseEnter={() => setIsShownSignIn(true)}
                onMouseLeave={() => setIsShownSignIn(false)}
                isShownSignIn={isShownSignIn}
            >
                <SignOut onClick={logOut}>
                    Sign-out
                </SignOut >

            </BoxSignInWrapper>
        )

    } else {
        return (
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
        )


    }

    async function logOut() {

        try {
            await signOut(getConfig(token));
            setToken("");
            navigate("/signin");
        } catch (error) {
            alert(error.response.data);
        }
    }
}

const BoxSignInWrapper = styled.div`
width: ${props => props.isShownSignIn ? '100px' : '0px'};
height: ${props => props.isShownSignIn ? '100px' : '0px'};
top: 60px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
background-color: #cdd6f4;
opacity: 0.95;
position: fixed;
top: ${props => props.isShownSignIn ? '60px' : '30px'};
right: ${props => props.isShownSignIn ? '50px' : '80px'};
opacity: ${props => props.isShownSignIn ? 0.98 : 0};
z-index: 3;
transition: all 0.3s ease-in;
`
const SignIn = styled.div`
display: flex;
justify-content: center;
align-items: center;
:hover{
    cursor: pointer;
}
`
const SignUp = styled.div`
display: flex;
justify-content: center;
align-items: center;
:hover{
    cursor: pointer;
}
`
const SignOut = styled.div`
display: flex;
justify-content: center;
align-items: center;
:hover{
    cursor: pointer;
}
`