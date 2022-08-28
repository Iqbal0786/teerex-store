import React from 'react'
import "../Styles/styles.css"
import {useSelector} from "react-redux"
export default function Cart() {
  const {cartData}= useSelector((store)=>store.CartReducer);
  console.log(cartData)
  return (
    <>
    <div id="navBar">
      <div className="menu">
        <h3>Cart</h3>
        <i class="fa fa-shopping-cart" aria-hidden="true" style={{fontSize:"35px" , cursor:"pointer"}}
         onClick={()=>{
         }}
        >
            <span id='cart_item_count'>{ cartData.length?cartData.length:""}</span>
        </i>
      </div>
    </div>
    <div className="cart_main">
       <p>Shopping Cart</p>
       <div className="cart_content">
          {
            cartData.map((e)=>{
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
                  <button>Delete</button>
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
