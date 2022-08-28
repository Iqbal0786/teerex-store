import { ADD_CART_ITEM, DELETE_CART_ITEM } from "./CartConstant"

const initialState={
    cartData:[]
}

export const CartReducer=(store=initialState,{type,payload})=>{
      switch(type){
         case ADD_CART_ITEM: return {...store , cartData:cartData.push(payload)}
         case DELETE_CART_ITEM : return {cartData:[...deleteItem(store.cartData,payload)]}
      }
}

const deleteItem=(cart,index)=>{
    return cart.splice(index,1)
}