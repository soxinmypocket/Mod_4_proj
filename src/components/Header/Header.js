import React from 'react'
import {NavLink} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import FilterAndSortComponent from './FilterAndSortComponent'
import Navbar from 'react-bootstrap/Navbar'
//import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Header = (props) => {
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Elm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home" onClick={() => props.clickHeader("home")}>Home</Nav.Link>
            <Nav.Link href="/items" onClick={() => props.clickHeader("item")}>Clothing</Nav.Link>
            {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link to="/orders" onClick={() => props.clickHeader("order")}>Orders</Nav.Link>
            <Nav.Link to="/cart" onClick={() => props.clickHeader("cart")}>Cart</Nav.Link>
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
