import {createSlice} from "@reduxjs/toolkit";

const StoreItem=localStorage.getItem("cartItems")

const initialState={
    cartItems:StoreItem ? JSON.parse(StoreItem) : []
}
const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newItem=action.payload
            const existItem=state.cartItems.find((items)=>items.id===newItem.id)

            if(existItem){
                existItem.quantity += newItem.quantity
            }
            else{
                state.cartItems.push({
                    id:newItem.id,
                    title:newItem.title,
                    img:newItem.img,
                    des:newItem.des,
                    quantity:1
                })
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        }
    }
})
export default CartSlice.reducer
export const{addToCart}=CartSlice.actions