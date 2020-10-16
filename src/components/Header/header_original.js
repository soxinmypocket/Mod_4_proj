import React from 'react'
import {NavLink} from 'react-router-dom';

import FilterAndSortComponent from './FilterAndSortComponent'

const Header = (props) => {
    return(
        <div className="header">
            {/* left */}
            <div className="left-menu">
                <div className="items-container">
                <NavLink to="/home" >
                    <div onClick={() => props.clickHeader("home")} className="logo">
                        <div>
                            ELM
                        </div>
                    </div>
                </NavLink>
                 </div>
                
                        <NavLink to="/women" >
                            <button variant="outline-success" onClick={() => props.clickHeader("Women")} >
                            {/* <button variant="outline-success">  */}
                                Women
                             {/* </button> */}
                            </button>
                        </NavLink>
                
             </div>

              <div className="right-menu">
                 <div className="items-container">
                     <div>
                         {
                            props.header === "items" ? <FilterAndSortComponent  
                                handleSearchFilter={props.handleSearchFilter}
                                handleSelectedCategory={props.handleSelectedCategory}
                                categories={props.categories}
                            /> 
                            : 
                            null
                        }
                    </div>
                    <NavLink to="/order" >
                    <div onClick={() => props.clickHeader("order")}>
                        Orders
                    </div> 
                    </NavLink>
                    

                    <NavLink to="/cart" >  
                     <div onClick={() => props.clickHeader("cart")} style={{display: "flex"}}>
                        <div>
                            <i className="material-icons">
                            shopping_cart
                            </i>
                        </div>
                         <div>
                            Cart
                        </div>
                    </div> 
                    </NavLink>
                </div>
           
            </div>
        </div>
    );
}


export default Header; 
