import React from 'react';

const CartCard = (props) => {
  const {item, item: {image_url, name, price}, handleRemoveFromCart} = props
  return (
    <div className="item-card-simplified">
      <div>
        <img alt={name} className="item-card-simplified-image" src={image_url}/>
        <p>{name}</p>
        <p>${price}</p>
      </div>
      <button onClick={() =>  handleRemoveFromCart(item)} className="item-card-simplified-button">Remove from Cart</button>
    </div>
  )
}

export default CartCard