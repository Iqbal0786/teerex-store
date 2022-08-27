import React from 'react'
import "../Styles/styles.css"
export default function ProductList() {
  return (
    <>
    <div id="navBar">
      <div className="menu">
        <h3>TeeRex Store</h3>
        <i class="fa fa-shopping-cart" aria-hidden="true" style={{fontSize:"35px"}}>
            <span id='cart_item_count'>0</span>
        </i>
      </div>
    </div>
     <div className="searchDiv">
        <input type="text" placeholder='Search for products...' />
         <div className="searchIconDiv">
            <i class="fa fa-search" aria-hidden="true"></i>
         </div>
     </div>
      
      <div className="contentDiv">
        <div className='filter_div'>
            <div className="checkBoxDiv">
                <h4>Color</h4>
                <div className="check_box">
                <input type="checkbox" name=""  /> <label htmlFor="">Red</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name=""  /> <label htmlFor="">Blue</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name=""  /> <label htmlFor="">Green</label>
                </div>
            </div>
        </div>
        <div className='product_list_div'></div>
      </div>
    </>
  )
}
