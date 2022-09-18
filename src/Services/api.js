import axios from "axios";

const URL = process.env.REACT_APP_API_BASE_URL;
//const URL = 'http://localhost:5000';

// Sign-Up--------------------------------
function signUp(body) {
    return axios.post(`${URL}/signup`, body)
}
// LogIn
function signIn(body) {
    return axios.post(`${URL}/signin`, body)
}

// Home--------------------------------
function getPortifolio(style, getConfig) {
    return axios.get(`${URL}/home?style=${style}`, getConfig)
}

// Cart------------------------------
function getCart(getConfig) {
    return axios.get(`${URL}/cart`, getConfig)
}

function addProduct(body, getConfig) {
    return axios.post(`${URL}/cart`, body, getConfig)
}

// Delete --------------------------------
function deleteProduct(id, getConfig) {
    return axios.delete(`${URL}/cart/${id}`, getConfig)
}

function changeQtd(body, getConfig) {
    return axios.put(`${URL}/changeqtd`, body, getConfig)
}

//Logout
function signOut(getConfig) {
    return axios.delete(`${URL}/signout`, getConfig)
}

// UserStatus
// function verifySession (getConfig) {
//     return axios.get(`${URL}/verifysession`, getConfig)
// }

export {
    signUp,
    signIn,
    getPortifolio,
    getCart,
    addProduct,
    deleteProduct,
    changeQtd,
    signOut,
    // verifySession
}