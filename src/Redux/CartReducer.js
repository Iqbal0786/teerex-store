import {
  ADD_CART_ITEM,
  DECREASE_ITEM_QUANTITY,
  DELETE_CART_ITEM,
  GET_TOTAL_ITEM_PRICE,
  INCREASE_ITEM_QUANTITY,
} from "./CartConstant";

const initialState = {
  cartData: [],
  totalPrice:0
};

export const CartReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART_ITEM:
      return { ...store, cartData: [...addToCart(store, payload)] }
    case DELETE_CART_ITEM:
      return { cartData: [...deleteItem(store, payload)] }
    case INCREASE_ITEM_QUANTITY:
      return { cartData: [...incrementQuantity(store.cartData,payload)] }
    case DECREASE_ITEM_QUANTITY:
      return { cartData: [...decrementQuantity(store.cartData,payload)] }
      case  GET_TOTAL_ITEM_PRICE : return {...store,totalPrice:calulatePrice(store.cartData)}
    default:
      return store;
  }
};

const deleteItem = (cart, id) => {
  let rest_cart_data = cart.cartData.filter((e) => e.id != id);
  console.log("cart after deleting data", cart.cartData);
  return rest_cart_data;
};

const addToCart = (cart, item) => {
   if(cart.cartData){

   }
  const temp = cart.cartData;
  let currentItem = { currentQuantity: 1, ...item };
  console.log("current updated item", currentItem);
  temp.push(currentItem);
  return temp;
};

const incrementQuantity=(cart,id)=>{

  return cart.filter((e)=>e.id==id?e.currentQuantity++:e)
   
}
const decrementQuantity=(cart,id)=>{

  return cart.filter((e)=>e.id==id && e.currentQuantity>1?e.currentQuantity--:e)
   
}

const calulatePrice=(cart)=>{
  //  return cart.reduce((acc,e)=> (acc+e.price)*e.currentQuantity ,0)
}