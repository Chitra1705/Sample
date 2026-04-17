import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Redux/CartSlice"

const Store=configureStore({
    reducer:{
        cart:CartSlice
    }
})
export default Store