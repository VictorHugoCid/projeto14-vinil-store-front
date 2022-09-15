import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../Styles/GlobalStyle';
import { useState } from 'react';
import globalContext from '../Context/globalContext';

import SignIn from './SignIn/SignIn';
import SingUp from './SignUp/SignUp';
import Home from './Home/Home.js';
import Cart from './Cart/Cart.js'
import Success from './SuccessPage/Success.js'
// import UpdateRegister from './Update/UpdateRegister.js';

export default function App() {
    const[reRender, setReRender] = useState(true);
    const [isShown, setIsShown ]= useState(false)
    const [isShownSignIn, setIsShownSignIn ]= useState(false)
    const [isShownCart, setIsShownCart ]= useState(false)



    const [value, setValue] = useState('')

    return (
        <>
            <GlobalStyle />
            <globalContext.Provider value = {{ setValue, reRender, setReRender, isShown, setIsShown, isShownSignIn, setIsShownSignIn, isShownCart, setIsShownCart}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SingUp />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/success" element={<Success />}/>
                        {/* <Route path="/updateRegister/:type/:id" element={<UpdateRegister/>} /> */}
                    </Routes>
                </BrowserRouter>
            </globalContext.Provider>
        </>
    );
}