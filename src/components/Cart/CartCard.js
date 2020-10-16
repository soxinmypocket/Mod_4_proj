
import React from 'react';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const CartCard = (props) => {
  console.log(props)
  const {item, item: {image_url, name, price, description}, handleRemoveFromCart} = props
  return (

  <Table striped borderless hover>
    <tbody>
      <tr>
        <td><img className="item-card-simplified-image" src={image_url}></img></td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td><Button variant="light" size="sm"onClick={() =>  handleRemoveFromCart(item)} className="button">Remove</Button></td>
      </tr>
    </tbody>
  </Table>
  )
}

export default CartCard; 

