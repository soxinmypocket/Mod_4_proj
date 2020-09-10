import React from 'react'
//import {NavLink} from 'react-router-dom';
import FilterAndSortComponent from './FilterAndSortComponent'

const Header = (props) => {
    return(
        <div className="header">
            {/* left */}
            <div className="left-menu">
                
                
                    <div className="items-container">
                        <div onClick={() => props.clickHeader("home")} className="logo">
                            <div>
                                ELM
                            </div>
                        </div>
                    </div>
                
        
                
                    <div className="right-menu">
                    <div className="items-container">
                        <div onClick={() => props.clickHeader("Women")} >
                            <div>
                                Women
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    

                {/* <div>
                    {
                        props.header === "items" ? <FilterAndSortComponent  
                            handleSearchFilter={props.handleSearchFilter}
                            handleSelectedCategory={props.handleSelectedCategory}
                            categories={props.categories}
                        /> 
                        : 
                        null
                    }
                </div> */}
            {/* </div> */}

            {/* <div className="right-menu">
                <div className="items-container">
                    <div onClick={() => props.clickHeader("items")} className="logo">
                        <div>
                            ELM
                        </div>
                    </div>
                </div>
            </div> */}

            {/* right */}
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
                    
                        <div onClick={() => props.clickHeader("order")}>
                            Orders
                        </div>
                    

                        
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
                    
                </div>
            </div>
         </div>
    );
}

export default Header;
