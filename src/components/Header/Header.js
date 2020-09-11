import React from 'react'
import {NavLink} from 'react-router-dom';
//import {Nav} from 'react-bootstrap';
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
                
        
                
                {/* <div className="right-menu"> */}
                {/* <NavLink to="/women" > */}
                    {/* <div className="items-container"> */}
                        <NavLink to="/women" >
                        <button variant="outline-success" onClick={() => props.clickHeader("Women")} >
                            {/* <button variant="outline-success">  */}
                                Women
                            {/* </button> */}
                            
                        </button>
                        
                        </NavLink>

                    {/* </div> */}
                    {/* </NavLink> */}
                {/* </div> */}
                
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


// const Header = (props) => {
//     return(
        
//         <>
//         <div className="logo" onClick={() => props.clickHeader("order")}>
//             ELM
//         </div>
//             <Nav className="justify-content-center" activeKey="/home">
//                 <Nav.Item>
//                 <Nav.Link href="/home">Womens</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                 <Nav.Link href="/orders" onClick={() => props.clickHeader("order")}>Orders</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                 <Nav.Link href="cart" onClick={() => props.clickHeader("cart")} style={{display: "flex"}}>Cart</Nav.Link>
//                 </Nav.Item>
//             </Nav>
//         </>
//     )}


// export default Header;

//--------------ORIGINAL DONT TOUCH---------------------------
{/* 

const Header = (props) => {
    return(
        <div className="header">
            {/* left */}
            {/* <div className="left-menu">
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
                
            </div> */}

            {/* <div className="right-menu">
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
                    </div> */}
                    

                        
                    {/* <div onClick={() => props.clickHeader("cart")} style={{display: "flex"}}>
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


export default Header; */} 
