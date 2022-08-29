import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_cart_item } from '../Redux/CartConstant'

export default function SingleProductCard({item}) {
   const dispatch=useDispatch();
   // const data = useSelector((store)=>store.CartReducer)
   // console.log("cart data" , data)
  return (
    <>
     <div className="product_card">
        <p className='product_title'>{item.name}</p>
        <img src={`${item.imageURL}`} alt=" PRODUCT IMAGES" />
         <div className="item_details">
            <p>Rs {item.price}</p>
            <button onClick={()=>{
               dispatch(add_cart_item(item));
               alert(`${item.name} added in the cart !!`)
            }}>Add to Cart</button>
         </div>
     </div>
    
    </>
  )
}
