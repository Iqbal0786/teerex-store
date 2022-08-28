import React from 'react'
import "../Styles/styles.css"
export default function Cart() {
  return (
    <>
    <div id="navBar">
      <div className="menu">
        <h3>Cart</h3>
        <i class="fa fa-shopping-cart" aria-hidden="true" style={{fontSize:"35px" , cursor:"pointer"}}
         onClick={()=>{
         }}
        >
            <span id='cart_item_count'>0</span>
        </i>
      </div>
    </div>
    <div className="cart_main">
       

    </div>
    
    </>
  )
}
