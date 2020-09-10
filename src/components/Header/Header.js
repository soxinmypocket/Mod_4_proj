import React from 'react'
import FilterAndSortComponent from './FilterAndSortComponent'

const Header = (props) => {
    return(
        <div className="header">
            {/* left */}
            <div className="left-menu">
                <div onClick={() => props.clickHeader("items")} className="items-container">
                    <div>
                        ELM
                    </div>
                </div>

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
            </div>

            {/* right */}
            <div className="right-menu">
                <div className="items-container">
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
    )
}

export default Header;
