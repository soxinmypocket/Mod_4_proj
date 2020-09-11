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
                            </div>
                    </div>
                : <h3>There are no items in cart</h3>
            }
            
           
        </div>
    );
  }
}
export default CartContainer;



// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import CartCard from "./CartCard";

// class CartContainer extends Component {
//   render() {
//     const {cart, handleRemoveFromCart} = this.props
//     return (
//       //<React.Fragment>
//         <div className="container">
//           <table id="cart" className="table table-hover table-condensed">
//             <thead>
//               <tr>
//                 <th style={{ width: "50%" }}>Product</th>
//                 <th style={{ width: "10%" }}>Price</th>
//                 <th
//                   style={{
//                     width: "8 %"
//                   }}
//                 >
//                   Quantity
//                 </th>
//                 <th style={{ width: "22%" }} className="text-center">
//                   Subtotal
//                 </th>
//                 <th style={{ width: "10%" }} />
//               </tr>
//             </thead>
//             <tbody>
//               {this.props.cart.length === 0 ? (
//                 <div class="alert alert-danger large" role="alert">
//                   You don't have any product in your basket
//                 </div>
//               ) : (
//                 cart.map(item => (
//                   <CartCard
//                     key={item.id}
//                     item={item}
//                     handleRemoveFromCart={handleRemoveFromCart}
//                   />
//                 ))
//               )}
//             </tbody>
//             <tfoot>
//               <tr>

//                 {/* <td>
//                   <Link to="/products" className="btn btn-warning">
//                     <i className="fa fa-angle-left" /> Continue Shopping
//                   </Link>
//                 </td> */}

//                 <td colSpan="2" className="hidden-xs" />
//                 <td className="hidden-xs text-center">
//                   <strong>Total: {this.props.cartCard}</strong>
//                 </td>
//                 <td>
//                   <Link to="/home" className="btn btn-success btn-block">
//                     Checkout
//                     <i className="fa fa-angle-right" />
//                   </Link>
//                 </td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       //</React.Fragment>
//     );
//   }
// }

// export default CartContainer;

