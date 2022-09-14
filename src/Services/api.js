import axios from "axios";

const URL = "http://localhost:5000";

// Sign-Up--------------------------------
function signUp(body) {
    return axios.post(`${URL}/signup`, body)
}
// LogIn
function logIn(body) {
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
function logOut(getConfig) {
    return axios.delete(`${URL}/logOut`, getConfig)
}

export {
    signUp,
    logIn,
    getPortifolio,
    getCart,
    deleteProduct,
    logOut
}