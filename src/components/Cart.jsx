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
            <span id='cart_item_count'>{"0"}</span>
        </i>
      </div>
    </div>
    <div className="cart_main">
       <p>Shopping Cart</p>
       <div className="cart_content">
          <div className="cart_content_main">
              <img src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png" alt="" />
               <div className="price_and_title_box">
                <p>Black Polo</p>
                <h4>Rs 450</h4>
               </div>
               <div className="button_box">
                 <div className="increase_decrease_box">
                  <button>+</button>
                  <div>0</div>
                  <button>-</button>
                 </div>
                  <button>Delete</button>
               </div>
          </div>
        </div>
    </div>

     
    
    </>
  )
}
