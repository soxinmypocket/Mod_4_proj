import React from 'react'

const ItemCard = (props) => {
    const {cart, item, item: {name, image_url, description, price}, handleAddToCart} = props
    return(
        <div className="item-card"> 
            <img className="item-image" src={image_url} alt={name}/>
            <h4>{name}</h4>
            <p>{description}</p>

            <p>Price: ${price}</p> 
            <button disabled={cart.includes(item)} onClick={() => handleAddToCart(props.item)} className="item-button"> 
                <div>
                    <i className="material-icons">
                        shopping_cart
                    </i>
                </div>      
                <div>
                    {cart.includes(item) ? "Already in Cart" : " "} 
                </div> 
            </button>     
        </div>
    )
}

export default ItemCard;