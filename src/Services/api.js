import axios from "axios";

const URL = process.env.REACT_APP_API_BASE_URL;
//const URL = 'http://localhost:5000';

// Sign-Up--------------------------------
function signUp(body) {
    return axios.post(`https://projeto14-vinil-store.herokuapp.com/signup`, body)
}
// LogIn
function signIn(body) {
    return axios.post(`${URL}/signin`, body)
}

// Home--------------------------------
function getPortifolio(style, getConfig) {
    return axios.get(`https://projeto14-vinil-store.herokuapp.com/home?style=${style}`, getConfig)
}

// Cart------------------------------
function getCart(getConfig) {
    return axios.get(`${URL}/cart`, getConfig)
}

function addProduct(body, getConfig) {
    return axios.post(`${URL}/cart`, body, getConfig)
}
// clicked
function setMarked(id, body, getConfig) {
    return axios.put(`${URL}/portifolio/${id}`, body, getConfig)
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

function checkOut(body, getConfig) {
    return axios.post(`${URL}/sales`, body, getConfig)
}

export {
    signUp,
    signIn,
    getPortifolio,
    getCart,
    addProduct,
    deleteProduct,
    changeQtd,
    signOut,
    checkOut,
    setMarked
}