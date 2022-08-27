import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_product_request, product_filter } from '../Redux/ProductConstant';
import "../Styles/styles.css"
import SingleProductCard from './SingleProductCard'
export default function ProductList() {
       const dispatch= useDispatch();
       const {fetchedData,filterData,loading,error}= useSelector((store)=>store.productReducer);
    //    console.log(fetchedData)
       const [selectedCategory,setSelectedCategory]=useState([]);

       const selectCategoryHandler=(e)=>{
             const {checked,value}=e.target;
             if(checked){
              setSelectedCategory([...selectedCategory,value]);
              
             }
             else{
                setSelectedCategory([...selectedCategory.filter((e)=>e!=value)])
             }
       }
    //    console.log(selectedCategory)

         useEffect(()=>{
             if(selectedCategory.length==0){
                dispatch(get_product_request())
                return 
             }
            dispatch(product_filter(selectedCategory))
         },[selectedCategory])

       useEffect(()=>{
        dispatch(get_product_request())
       },[])
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
                <input type="checkbox" name=""  onChange={selectCategoryHandler} value={'Red'} /> <label htmlFor="">Red</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="" onChange={selectCategoryHandler}  value={"Blue"} /> <label htmlFor="">Blue</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={'Green'} /> <label htmlFor="">Green</label>
                </div>
            </div>
              {/* gender filter box */}
              <div className="checkBoxDiv">
                <h4>Gender</h4>
                <div className="check_box">
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={'Men'} /> <label htmlFor="">Men</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={"Women"} /> <label htmlFor="">Women</label>
                </div>
            </div>
            {/* price filter box */}
            <div className="checkBoxDiv">
                <h4>Price</h4>
                <div className="check_box">
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={'250'} /> <label htmlFor="">0- Rs 250</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={"251"} /> <label htmlFor="">251- Rs 450</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={'450'} /> <label htmlFor=""> Rs 450</label>
                </div>
            </div>
             {/* type filter div */}
             <div className="checkBoxDiv">
                <h4>Type</h4>
                <div className="check_box">
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={'Polo'} /> <label htmlFor="">Polo</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={"Hoodie"} /> <label htmlFor="">Hoodie</label>
                </div>
                <div className="check_box">
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={'Basic'} /> <label htmlFor="">Basic</label>
                </div>
            </div>
             
        </div>
        <div className='product_list_div'>
            {
                loading?<img className='loaderImg' src='https://i.pinimg.com/originals/15/f2/09/15f209bdae6da376665c3a1b2cb781ea.gif'/> : error? <img className='loaderImg' src='https://i.pinimg.com/originals/15/f2/09/15f209bdae6da376665c3a1b2cb781ea.gif'/> : filterData.map((item)=>{
                    return (
                  <SingleProductCard item={item} key={item.id}/>
                    )
                })
            }

            
         
        </div>
      </div>
    </>
  )
}
