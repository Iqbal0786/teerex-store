import React, { useEffect } from 'react'
import "../Styles/styles.css"
import {useDispatch, useSelector} from "react-redux"
import { delete_cart_item } from '../Redux/CartConstant';
export default function Cart() {
  const {cartData}= useSelector((store)=>store.CartReducer);
  const dispatch=useDispatch()
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
            cartData.map((e , i)=>{
              return (
                <div className="cart_content_main">
              <img src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png" alt="" />
               <div className="price_and_title_box">
                <p>{e.name}</p>
                <h4>Rs {e.price}</h4>
               </div>
               <div className="button_box">
                 <div className="increase_decrease_box">
                  <button>+</button>
                  <div style={{marginTop:"6px"}}>1</div>
                  <button>-</button>
                 </div>
                  <button onClick={()=>{
                      console.log("clicked item id" , e.id, e)
                      dispatch(delete_cart_item(e.id))
                  }}>Delete</button>
               </div>
          </div>
              )
            })
          }
          
        </div>
    </div>

     
    
    </>
  )
}
