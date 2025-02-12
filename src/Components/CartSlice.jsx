import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
 name:'cart',
 initialState: {
    cartItems: [],
},
 reducers:{ 
    //state (current state of the slice) and action (the dispatched action containing the payload).
    addItemToCart:(state, action)=>{
        const existingItem = state.cartItems.find(item=>item.id===action.payload.id);
        if(existingItem){
            existingItem.quantity+=1;
        } else{
            //Takes the action.payload (which contains item details like id, name, price, etc.). Spreads its properties (...action.payload) to retain all item details.Adds a new quantity field with a value of 1.
            state.cartItems.push({...action.payload, quantity:1});
        }
    },
    removeItemFromCart: (state, action) =>{
        state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload);
    },
    clearCart: (state)=>{
        state.cartItems = [];
    },
   
    //action.payload likely contains the identifier (id) of the item whose quantity needs to be increased
    increaseItemQuantity: (state, action)=>{
        const itemToIncrease = state.cartItems.find(item=>item.id===action.payload);
        if(itemToIncrease){
            itemToIncrease.quantity+=1;
        } 

    },
    decreaseItemQuantity: (state,action)=>{
        const itemToDecrease=state.cartItems.find(item => item.id ===action.payload);
        if(itemToDecrease && itemToDecrease.quantity>1){
            itemToDecrease.quantity-=1;
        }
    }
         
 }
});
//createSlice returns an object containing the generated action creators and the reducer function.
export const {
    addItemToCart, 
    removeItemFromCart, 
    clearCart, 
    increaseItemQuantity, 
    decreaseItemQuantity
} = CartSlice.actions;
export default CartSlice.reducer;



