import React, { useEffect, useState } from 'react'
import "../Styles/styles.css"
import {useDispatch, useSelector} from "react-redux"
import { decrease_item_quantity, delete_cart_item, get_total_item_price, increase_item_quantity } from '../Redux/CartConstant';
import {useNavigate} from "react-router-dom"
export default function Cart() {
  const {cartData }= useSelector((store)=>store.CartReducer);
  const navigate=useNavigate()
  const dispatch=useDispatch()
   let totalPrice=0;
  //.log(cartData)
  console.log("current item in cart ", cartData)

  

  return (
    <>
    <div id="navBar">
      <div className="menu">
        <h3>Cart</h3>
        <i class="fa fa-shopping-cart" aria-hidden="true" style={{fontSize:"35px" , cursor:"pointer"}}
         onClick={()=>{
         }}
        >
            <span id='cart_item_count'>{ cartData.length>0?cartData.length:""}</span>
        </i>
      </div>
    </div>
    <div className="cart_main">
       <p>Shopping Cart</p> 
       <div className="cart_content">
          {
            cartData.length? cartData.map((e , i)=>{
              {totalPrice= totalPrice+(e.price*e.currentQuantity)}
              return (
                <div className="cart_content_main" id={e.id}>
              <img src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png" alt="" />
               <div className="price_and_title_box">
                <p>{e.name}</p>
                <h4>Rs {e.price * e.currentQuantity}</h4>
               </div>
               <div className="button_box">
                 <div className="increase_decrease_box">
                  <button onClick={()=>{
                    // checking quantity limit 
                     let itemIndex= cartData.findIndex((e)=>e.currentQuantity>e.quantity);
                     if(itemIndex!=-1){
                     alert("Item quantity limit is exceeded ")
                      return 
                     }
                     dispatch(increase_item_quantity(e.id))
                  }}>+</button>
                  <div style={{marginTop:"6px"}}>{e.currentQuantity}</div>
                  <button onClick={()=>{
                      dispatch(decrease_item_quantity(e.id))
                  }}>-</button>
                 </div>
                  <button onClick={()=>{
                      console.log("clicked item id" , e.id, e)
                      dispatch(delete_cart_item(e.id))
                  }}>Delete</button>
               </div>
          </div>
              )
            }):  <div className='no_cart_item_div'>
                   <p onClick={()=>{navigate("/")}}>Start adding items in the cart</p>
                  <img src="https://c.tenor.com/8BeuRyZSb90AAAAC/shopping-cart-shopping.gif" alt="" />
            </div>
          }
          
        </div>

        <h4 style={{marginLeft:"13%" , marginTop:"10px"}}>Total payable amount : {totalPrice==0?"":totalPrice}</h4>
    </div>

     
    
    </>
  )
}
