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

            <h1 onClick={() => {
                setStyle('')
                navigate('/home')
                setReRender(!reRender)
            }}>Home</h1>
            <Line></Line>
            <h1>Estilos</h1>
            <Line></Line>
            <p onClick={() => {
                setStyle('')
                navigate('/home')
                setReRender(!reRender)
            }}> {' + Todos'}</p>
            <p onClick={() => {
                setStyle('Samba')
                navigate('/home')
                setReRender(!reRender)
            }}> {' + Samba'}</p>
            <p onClick={() => {
                setStyle('Rock')
                navigate('/home')
                setReRender(!reRender)
            }}>   {' + Rock'}</p>
            <p onClick={() => {
                setStyle('Forró')
                navigate('/home')
                setReRender(!reRender)
            }}>{' + Forró'}</p>


        </MenuWrapper>


    )
}

const MenuWrapper = styled.div`
width: 250px;
height: 100vh;
top: 60px;
padding: 10px;

background-color: #03045e;
opacity: 0.98;

position: fixed;
left: 0;
left:${props => props.isShown ? '0' : '-100vw'};
z-index: 1;

transition: all 0.5s ease-out;

h1{
    cursor: pointer;
    margin-bottom: 5px;
    color: #caf0f8;
}

p{
    cursor: pointer;
    margin-bottom: 10px;
    color: #caf0f8;
}
`
const Line = styled.div`
border-bottom: 1px solid #caf0f8;
margin-bottom: 5px;

`