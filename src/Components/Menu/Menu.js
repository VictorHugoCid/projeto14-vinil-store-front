import styled from "styled-components";
import GlobalContext from "../../Context/globalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Menu() {

    const navigate = useNavigate()
    const { isShown, setIsShown, style, setStyle, reRender, setReRender } = useContext(GlobalContext);

    return (
        <MenuWrapper
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            isShown={isShown}
        >
            <p onClick={() => {
                setStyle('Samba')
                setReRender(!reRender)
            }}>Samba</p>
            <p onClick={() => {
                setStyle('Rock')
                setReRender(!reRender)
            }}>Rock</p>
            <p onClick={() => {
                setStyle('Forró')
                setReRender(!reRender)
            }}>Forró</p>


        </MenuWrapper>


    )
}

const MenuWrapper = styled.div`
width: 250px;
height: 100vh;
top: 60px;

background-color: #cdd6f4;
opacity: 0.98;

position: fixed;
left: 0;
left:${props => props.isShown ? '0' : '-100vw'};
z-index: 1;

transition: all 0.5s ease-out;


p{
    cursor: pointer;
    margin-bottom: 10px;
}
`