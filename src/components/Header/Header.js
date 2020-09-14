import React from 'react'
import {NavLink} from 'react-router-dom';
import {Nav} from 'react-bootstrap/';
// import Nav from 'react-bootstrap/Nav'
import FilterAndSortComponent from './FilterAndSortComponent'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Header = (props) => {
    return(
        <Navbar bg="light" expand="lg" >
        {/* <Navbar.Brand href="/home">Elm</Navbar.Brand> */}
        <Navbar.Brand><NavLink to="/home" onClick={() => props.clickHeader("home")}>Elm</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          {/* <Nav.Link><NavLink to="/home" onClick={() => props.clickHeader("home")}>Home</NavLink></Nav.Link> */}
            {/* <Nav.Link href="/items" onClick={() => props.clickHeader("item")}>Clothing</Nav.Link> */}
            {/* {
                            props.header === "items" ? <FilterAndSortComponent  
                            handleSelectedCategory={props.handleSelectedCategory}
                            categories={props.categories}
                            /> 
                            : 
                            null
                        } */}
            {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
            </NavDropdown> */}
           <Nav.Link> <NavLink to="/items" onClick={() => props.clickHeader("items")}>Clothing</NavLink></Nav.Link>
           <Nav.Link> <NavLink to="/order" onClick={() => props.clickHeader("order")}>Orders</NavLink></Nav.Link>
           <Nav.Link> <NavLink to="/cart" onClick={() => props.clickHeader("cart")}>Cart</NavLink></Nav.Link>
           {
                            props.header === "items" ? <FilterAndSortComponent  
                            handleSelectedCategory={props.handleSelectedCategory}
                            categories={props.categories}
                            /> 
                            : 
                            null
                        }
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-dark">Search</Button>
          </Form>
          
        </Navbar.Collapse>
      </Navbar>
    );
}


export default Header; 

//-------------





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
