 import React, { Component } from 'react';
 import CartCard from './CartCard'


 class CartContainer extends Component { 
   render() { 
    const {cart, placeOrder, handleRemoveFromCart} = this.props
    return (
        <div>
            <h1>Cart</h1> 
            { 
                this.props.cart.length !== 0 ? 
                    <div> 
                        <button className="cart-button" onClick={() => placeOrder(cart)}>Place Order</button> 
                        <div className="cart-container"> 
                            {
                                cart.map(item => <CartCard 
                                    key={item.id}
                                    item={item}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                />)
                            }
                        <button className="cart-button" onClick={() => placeOrder(cart)}>Place Order</button>
                        </div>
                    </div>
                : <h3>There are no items in cart</h3>
            }
        </div>
    );
  }
}
export default CartContainer;