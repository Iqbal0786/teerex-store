
export const  ADD_CART_ITEM="ADD_CART_ITEM";
export const DELETE_CART_ITEM="DELETE_CART_ITEM";

export const add_cart_item=(payload)=>({type:ADD_CART_ITEM,payload});
export const delete_cart_item=(payload)=>({type:DELETE_CART_ITEM,payload})