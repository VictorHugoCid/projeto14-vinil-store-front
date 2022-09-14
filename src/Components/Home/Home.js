import styled from "styled-components";
import Portifolio from "../Portifolio/Portifolio";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import GlobalContext from "../../Context/globalContext";
import { useContext } from "react";

export default function Home() {

    const { isShown } = useContext(GlobalContext)

    return (
        <>
            <Header />
            {/* {isShown ? (
                <Menu/>
            ) : (
                ''
            )} */}
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
