import React, { Component } from 'react';
import OrderComponent from './OrderComponent'

class OrderContainer extends Component {
  render() {
    const {orders} = this.props
    return (
        <div>
            <h1>Past Orders</h1>
            {
               orders.length !== 0 ? 
                <div className="orders-container">
                    {
                        // keep track of order number
                        orders.map((order, index) => <OrderComponent number={index + 1} order={order}/>)
                    }
                </div>
                :
                <h3>No Orders Made</h3>
            }
          
        </div>
    );
  }
}

export default OrderContainer;