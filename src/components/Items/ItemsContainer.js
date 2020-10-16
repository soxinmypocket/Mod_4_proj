import React from 'react'
import ItemCard from './ItemCard'

const ItemsContainer = (props) => {
    const {items, cart, handleAddToCart} = props
    return(
        <div>
        { 
            <div className="e-commerce-container">
                {
                    items.map(item => <ItemCard
                        cart = {cart} 
                        key={item.id} 
                        item={item}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div> 
        }
        </div>
    )
}

export default ItemsContainer;