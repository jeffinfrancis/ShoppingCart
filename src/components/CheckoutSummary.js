import React from 'react'
import { Button } from 'react-bootstrap';
import "./styles.css";

const CheckoutSummary = ({count,total}) => {
  return (
    <div>
      <h4>Subtotal ({count}) items</h4><br />
      <span>Total : {total}$</span>
      <Button>Proceed to Checkout</Button>
    </div>
  )
}

export default CheckoutSummary
