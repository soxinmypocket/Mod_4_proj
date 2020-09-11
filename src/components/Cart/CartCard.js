import React from 'react';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const CartCard = (props) => {
  console.log(props)
  const {item, item: {image_url, name, price, description}, handleRemoveFromCart} = props
  return (

    <Table striped borderless hover>
  <tbody>
    <tr>
      <td><img className="item-card-simplified-image" src={image_url}></img></td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td><Button variant="light" size="sm"onClick={() =>  handleRemoveFromCart(item)} className="button">Remove</Button></td>
    </tr>
  </tbody>
</Table>
  )
}

export default CartCard; 

//DONT TOUCH 
// const CartCard = (props) => {
//   const {item, item: {image_url, name, price, description}, handleRemoveFromCart} = props
//   return (
//     <div >

//       <div class="row">
//       <div class="col-md-4 order-md-2 mb-4">
//       <h4 class="d-flex justify-content-between align-items-center mb-3">
//         <span class="badge badge-secondary badge-pill"></span>
//       </h4>
//       <ul class="list-group mb-3">
//         <li class="list-group-item d-flex justify-content-between lh-condensed">
//           <div>
//           <img alt={name} className="item-card-simplified-image" src={image_url}/>
//             <h6 class="my-0">{name}</h6>
//             <small class="text-muted">{description}</small>
//           </div>
//           <span class="text-muted">${price}</span>
//           <Button variant="primary" size="sm"onClick={() =>  handleRemoveFromCart(item)} className="button">Remove
//           </Button>
//         </li>
//       </ul>
//   </div>
// </div>
// </div>
//   )
// }


{/* import React from 'react';

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

export default CartCard; */}



// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class CartCard extends Component {
//   // state = {
//   //   quantity: 1,
//   //   subtotal: 0
//   // };
//   render() {
//     let {
//       cartCard,
//       deleteFromBasket,
//       removeFromBasket,
//       addToMyCart
//     } = this.props;
//     const { product } = cartCard;
//     return (
//       <React.Fragment>
//         <tr>
//           <td data-th="Product">
//             <div className="row">
//               <div className="col-sm-2 hidden-xs">
//                 <img
//                   src={product.img_url}
//                   alt={product.name}
//                   className="img-responsive"
//                 />
//               </div>
//               <div className="col-sm-10">
//                 <Link to={product}>
//                   <h4 className="nomargin">{product.name}</h4>
//                 </Link>
//                 <p>{product.description}</p>
//               </div>
//             </div>
//           </td>
//           <td data-th="Price">£{product.price}</td>
//           <td data-th="Quantity">
//             <div class="def-number-input number-input safari_only">
//               <button class="minus" onClick={() => removeFromBasket(product)} />
//               <input
//                 class="quantity"
//                 min="0"
//                 name="quantity"
//                 value={cartProduct.quantity}
//                 type="number"
//               />
//               <button class="plus" onClick={() => addToMyCart(product)} />
//             </div>
//           </td>
//           <td data-th="Subtotal" className="text-center">
//             ${product.price * cartProduct.quantity}
//           </td>
//           <td className="actions" data-th="">
//             <button className="btn btn-danger btn-sm">
//               <i
//                 className="fa fa-trash-o"
//                 onClick={() => deleteFromBasket(product)}
//               />
//             </button>
//           </td>
//         </tr>
//       </React.Fragment>
//     );
//   }
// }

// export default CartCard;


// import React from 'react';

// const CartCard = (props) => {
//   const {item, item: {image_url, name, price}, handleRemoveFromCart} = props
//   return (
//     <div className="item-card-simplified">
//       <div>
//         <img alt={name} className="item-card-simplified-image" src={image_url}/>
//         <p>{name}</p>
//         <p>${price}</p>
//       </div>
//       <button onClick={() =>  handleRemoveFromCart(item)} className="item-card-simplified-button">Remove from Cart</button>
//     </div>
//   )
// }

// export default CartCard