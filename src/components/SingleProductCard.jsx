import React from 'react'

export default function SingleProductCard() {
  return (
    <>
     <div className="product_card">
        <p className='product_title'>Hoodie</p>
        <img src="https://m.media-amazon.com/images/I/61oIQ4sgayL._UL1333_.jpg" alt="" />
         <div className="item_details">
            <p>Rs 250</p>
            <button>Add to Cart</button>
         </div>
     </div>
    
    </>
  )
}
