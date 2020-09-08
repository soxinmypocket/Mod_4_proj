import React from 'react'
// import { NavLink } from 'react-router-dom'
// import FilterAndSortComponent from './components/Nav/FilterAndSortComponent.js'

const Navbar = (props) => {
    return(
        <div className="navbar">
            {/* left */}
            <div className="left-menu">
                <div className="items-container">
                    <div>
                        <i className="material-icons">
                            {/* LOGO */}
                        </i>
                    </div>
                    {/* <NavLink to="/home"> */}
                    <div>
                        ELM
                    </div>
                    {/* </NavLink> */}
                </div>
                {/* <NavLink to="/women"> */}
                <div>
                    Women
                </div>
                {/* </NavLink> */}
                {/* <NavLink to="/men"> */}
                <div>
                    Men
                </div>
                {/* <div>
                   <FilterAndSortComponent />
                </div> */}
                



            </div>

            {/* right */}
            <div className="right-menu">
                <div className="items-container">
                    <div>
                        Orders
                    </div>

                    <div style={{display: "flex"}}>
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

export default Navbar;