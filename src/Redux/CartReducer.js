import { ADD_CART_ITEM, DELETE_CART_ITEM } from "./CartConstant"

const initialState={
    cartData:[]
}

export const CartReducer=(store=initialState,{type,payload})=>{
      switch(type){
         case ADD_CART_ITEM: 
          const temp= store.cartData;
          temp.push(payload)
         return {...store , cartData:[...temp]}
         case DELETE_CART_ITEM : return {cartData:deleteItem(store.cartData,payload)}
         default: return store
      }
}

const deleteItem=(cart,id)=>{
    // let ans=cart.filter(e=>e.id!=id)
    // console.log(ans)
    return cart.filter(e=>e.id!=id)
}