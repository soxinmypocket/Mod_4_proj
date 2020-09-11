import React from 'react'
import ItemCard from './ItemCard'

const ItemsContainer = (props) => {
    //console.log(props.items)
    const {items, cart, handleAddToCart} = props
        return(
            <div>
              {/* <h1>Womens</h1> */}
             { <div className="e-commerce-container">
                {
                    items.map(item => <ItemCard
                        cart = {cart} 
                        key={item.id} 
                        item={item}
                        handleAddToCart={handleAddToCart}
                    />)
              }
               </div> }
          </div>
      )
}

export default ItemsContainer;