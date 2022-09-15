import styled from "styled-components";

import Portifolio from "../Portifolio/Portifolio";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";


export default function Home() {

    // const { isShown } = useContext(GlobalContext)
    const token = localStorage.getItem("token");
    let username = "";
    if (token) {
        username = `, ${localStorage.getItem("username")}!`;
    } else {
        username = "! Sign-In.";
    }

    return (
        <>
            <Header username={username} token={token}/>
            <Menu />
            <HomeWrapper>
                <Portifolio />
            </HomeWrapper>
        </>



    )
}


const HomeWrapper = styled.div`
width: 100%;
height: 100vh;
background-color: purple;

overflow-y: scroll;

display: flex;
justify-content: center;
`
