import React, { Component } from 'react';
import ItemsContainer from './Items/ItemsContainer'
import OrderContainer from './Order/OrderContainer'
import CartContainer from './Cart/CartContainer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//console.log(this.props.items)
class MainContainer extends Component {
    
    renderItems = () => {
        const {header, orders, items, placeOrder, cart, handleAddToCart, handleRemoveFromCart} = this.props
        if(header === "cart"){
            return <CartContainer 
                placeOrder={placeOrder} 
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
            />
        }
        else if(header === "order"){
            return <OrderContainer orders={orders}/>
        }
        else{
            return <ItemsContainer
            cart = {cart}
            items={items}
            handleAddToCart={handleAddToCart}
            />
      }
    }
  render() {
    return (
      <div className="main-component">
          {
              this.renderItems()
          }
          
      </div>
    )
  }
}

export default MainContainer;






















// import React, { Component } from 'react';
// import ItemsContainer from './Items/ItemsContainer'
// // import OrderContainer from './Order/OrderContainer'
// import CartContainer from './Cart/CartContainer'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// //console.log(this.props.items)
// class MainContainer extends Component {
    
//     renderItems = () => {
//         const {header, orders, items, checkout, cart, handleAddToCart, handleRemoveFromCart} = this.props
//         renderItems(){
//             switch (props){
//                 case "/cart":
//                     return <CartContainer 
//                         checkout={checkout} 
//                         cart={cart}
//                        // handleRemoveFromCart={handleRemoveFromCart}
//                     />
            
        
//                 case "/orders":
//                     return <OrderContainer orders={orders}/>
        
//                 case "/items":
//                     return <ItemsContainer
//                 //    cart = {cart}
//                     items={items}
//                 //handleAddToCart={handleAddToCart}
//                 />
//             }
        
//         }
//     }
        
//   render() {
//     return (
//       <div className="main-component">
//           <main>
//           <Switch>

//             <Route path="/cart" exact>
//                 <CartContainer />
                  
//             </Route>
            
//             <Route path="/orders" exact>
//                 <OrderContainer />
//             </Route>

//             <Route path="/items"/>
//                 <ItemsContainer 
//                     items={items}/>

//           </Switch>
//           </main>
          
//       </div>
//     )
//   }
// }


// export default MainContainer;








