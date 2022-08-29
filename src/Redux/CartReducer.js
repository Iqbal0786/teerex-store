import {
  ADD_CART_ITEM,
  DECREASE_ITEM_QUANTITY,
  DELETE_CART_ITEM,
  INCREASE_ITEM_QUANTITY,
} from "./CartConstant";

const initialState = {
  cartData: [],
};

export const CartReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART_ITEM:
      return { ...store, cartData: [...addToCart(store, payload)] };
    case DELETE_CART_ITEM:
      return { ...store, cartData: [...deleteItem(store, payload)] };
    case INCREASE_ITEM_QUANTITY:
      return { ...store, cartData: [...increaseQuantity(store, payload)] };
    case DECREASE_ITEM_QUANTITY:
      return { ...store, cartData: [...decreaseQuantity(store, payload)] };
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
  const temp = cart.cartData;
  let currentItem = { currentQuantity: 1, ...item };
  console.log("current updated item", currentItem);
  temp.push(currentItem);
  return temp;
};

const increaseQuantity = (cart, id) => {
  let updatedCart = cart.cartData.filter((e) => {
    if (e.id == id) {
      let curelem = e;
      curelem.currentQuantity++;
      return curelem;
    }

  });
//  let updatedCart=[]
//    for(let i=0;i<cart.cartData.length;i++){
//      if(cart.cartData[i].id==id){
//         cart.cartData[i].currentQuantity++
//         updatedCart.push(cart.cartData[i])
//      }
//    }
  console.log("cart after increase quantity", updatedCart);
  return updatedCart;
};
const decreaseQuantity = (cart, id) => {
  let updatedCart = cart.cartData.filter((e) => {
    if (e.id == id && e.currentQuantity > 1) {
      e.currentQuantity--;
      return e;
    }
  });
  return updatedCart;
};
