import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'

export default class SortComponent extends Component {
  render() {
    const {handleSelectedCategory, categories} = this.props
    return (
      <div>
          <div>
          <select onChange={(e) => handleSelectedCategory(e.target.value)}>
              <option value="all">All</option>
              {
                categories.map(category => <option key={category} value={category}>{category}</option>)
              }
          </select>
      </div>
      </div>
    );
  }
}



{/* <div>
  <select onChange={(e) => handleSelectedCategory(e.target.value)}>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
          </NavDropdown>
              
              <option value="all">All</option>
    
              {
                categories.map(category => <option key={category} value={category}>{category}</option>)
              }
    </select>
    </div> */}
    
// <div>
//         <select onChange={(e) => handleSelectedCategory(e.target.value)}>
//           <NavDropdown title="Categories" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
//           </NavDropdown>
              
//               <option value="all">All</option>
    
//               {
//                 categories.map(category => <option key={category} value={category}>{category}</option>)
//               }
//     </select>
//     </div>



// const {handleSelectedCategory, categories} = this.props
//     return (
//       <div>
//           <div>
//           <select onChange={(e) => handleSelectedCategory(e.target.value)}>
//               <option value="all">All</option>
//               {
//                 categories.map(category => <option key={category} value={category}>{category}</option>)
//               }
//           </select>
//       </div>
//       </div>
//     );