import { createSlice } from "@reduxjs/toolkit";


const initialStateOfCart = [];

const cartSlice = createSlice({
    name:"Cart",
    initialState:initialStateOfCart,

    /*For each reducer function you define, createSlice generates an action creator function that you can use to dispatch actions. It also automatically defines the action types based on the name of the slice and the name of the reducer.*/
    reducers:{
          addItemsinCart: (state,action)=>{
            state.push(action.payload)
          },
          removeItemsInCart:(state,action)=>{
            return state.filter(item=>item.id!== action.payload)
          }
    }
})

export const {addItemsinCart,removeItemsInCart} = cartSlice.actions;

export default cartSlice.reducer;