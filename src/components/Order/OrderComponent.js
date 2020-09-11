import React, { Component } from 'react';
import OrderItemCard from './OrderItemCard'

class OrderComponent extends Component {
  render() {
    const {number, order} = this.props
    return (
      <div className="order-component">
          <h3>Order Number {number}</h3>
          <h4> Order Date September 11, 2020 </h4>
          <div className="order-item">
            {
                order.map(item => <OrderItemCard item={item} key={item.id}/>)
            }
          </div>
          
      </div>
    );
  }
}
export default OrderComponent;