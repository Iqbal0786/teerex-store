import React from 'react'
import "../Styles/styles.css"
import SingleProductCard from './SingleProductCard'
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
             {/* color filter box */}
            <div className="checkBoxDiv">
                <h4>Color</h4>
                <div className="check_box">
                <input type="checkbox" name=""  value={'Red'} /> <label htmlFor="">Red</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name=""  value={"Blue"} /> <label htmlFor="">Blue</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name=""  value={'Green'} /> <label htmlFor="">Green</label>
                </div>
            </div>
              {/* gender filter box */}
              <div className="checkBoxDiv">
                <h4>Gender</h4>
                <div className="check_box">
                <input type="checkbox" name=""  value={'Men'} /> <label htmlFor="">Men</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name=""  value={"Women"} /> <label htmlFor="">Women</label>
                </div>
            </div>
            {/* price filter box */}
            <div className="checkBoxDiv">
                <h4>Price</h4>
                <div className="check_box">
                <input type="checkbox" name=""  value={'0-250'} /> <label htmlFor="">0- Rs 250</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name=""  value={"251-450"} /> <label htmlFor="">251- Rs 450</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name=""  value={'450'} /> <label htmlFor=""> Rs 450</label>
                </div>
            </div>
             {/* type filter div */}
             <div className="checkBoxDiv">
                <h4>Type</h4>
                <div className="check_box">
                <input type="checkbox" name=""  value={'Polo'} /> <label htmlFor="">Polo</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name=""  value={"Hoodie"} /> <label htmlFor="">Hoodie</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name=""  value={'Basic'} /> <label htmlFor="">Basic</label>
                </div>
            </div>
             
        </div>
        <div className='product_list_div'>
            <SingleProductCard/>
         
        </div>
      </div>
    </>
  )
}
