import React from 'react'
import {NavLink} from 'react-router-dom';
import {Nav} from 'react-bootstrap/';
import FilterAndSortComponent from './FilterAndSortComponent'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Header = (props) => {
    return(
        <Navbar bg="light" expand="lg" >
        <Navbar.Brand><NavLink to="/home" onClick={() => props.clickHeader("home")}>Elm</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
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
