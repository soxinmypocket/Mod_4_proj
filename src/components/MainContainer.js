import React, { Component } from 'react';
import WomenContainer from './containers/Women/WomenContainer.js'
// import OrderContainer from './OrderContainer'
// import CartContainer from './CartContainer'

export default class MainContainer extends Component {


  render() {
    return (
      <div className="main-component">   
            {/* <CartContainer />
            <OrderContainer /> */}
            <WomenContainer />
      </div>
    );
  }
}