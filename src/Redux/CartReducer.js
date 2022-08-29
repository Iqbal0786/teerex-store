import { ADD_CART_ITEM, DELETE_CART_ITEM } from "./CartConstant"

const initialState={
    cartData:[]
}

export const CartReducer=(store=initialState,{type,payload})=>{
      switch(type){
         case ADD_CART_ITEM: return {...store , cartData:[...addToCart(store,payload)]}
         case DELETE_CART_ITEM : return {...store,cartData:[...deleteItem(store,payload)]}
         default: return store
      }
}

const deleteItem=(cart,id)=>{
     let  rest_cart_data=cart.cartData.filter(e=>e.id!=id)
     console.log("cart after deleting data" , cart.cartData);
   return rest_cart_data
}

const addToCart=(cart,item)=>{
    const temp= cart.cartData;
    temp.push(item)
    return temp
}