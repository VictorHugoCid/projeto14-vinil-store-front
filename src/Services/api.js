import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

// const URL = process.env.REACT_APP_API_BASE_URL;
const URL = 'http://localhost:5000';

// Sign-Up--------------------------------
function signUp(body) {
    return axios.post(`${URL}/signup`, body)
}
// LogIn
function signIn(body) {
    return axios.post(`${URL}/signin`, body)
}

// Home--------------------------------
function getPortifolio(getConfig) {
    return axios.get(`${URL}/home`, getConfig)
}

// Cart------------------------------
function getCart(getConfig) {
    return axios.get(`${URL}/cart`, getConfig)
}

// Delete --------------------------------
function deleteProduct(id, getConfig) {
    return axios.delete(`${URL}/deleteProduct/${id}`, getConfig)
}

//Logout
function signOut(getConfig) {
    return axios.delete(`${URL}/logOut`, getConfig)
}

export {
    signUp,
    signIn,
    getPortifolio,
    getCart,
    deleteProduct,
    signOut
}