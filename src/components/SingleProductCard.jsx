import React from 'react'

export default function SingleProductCard({item}) {
  return (
    <>
     <div className="product_card">
        <p className='product_title'>{item.name}</p>
        <img src={`${item.imageURL}`} alt=" PRODUCT IMAGES" />
         <div className="item_details">
            <p>Rs{item.price}</p>
            <button>Add to Cart</button>
         </div>
     </div>
    
    </>
  )
}
