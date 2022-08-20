import React,{useState} from 'react'
import {Card,Button} from 'react-bootstrap'
import { CartState } from '../Context/CartContext'
import Rating from './Rating'
import './styles.css'

const SingleProduct = (props) => {
    const [rating, setRating] = useState(0)
    const [cartItem, setCartItem] = useState(true)
    const {state:{cart},dispatch}=CartState()
    const {product }=props
    
  return (
    <div className="productCard">
        <Card style={{ width: '18rem' }}>
        <Card.Img alt='image' variant="top" src={product.image}/>
        
        <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle>
        <span>$ {product.price.split('.')[0]}</span>
        {
          product.fastDelivery?<div>Fast Drlivery</div>:<div>4 Days Delivery</div>
        }
        </Card.Subtitle>
        <Card.Text>
        <Rating rating={product.ratings} disabled={true}/>
        </Card.Text>
         
       {cart.some((p)=>p.id===product.id)?(<Button variant="danger" onClick={()=>dispatch({
        type:"REMOVE_FROM_CART",
        payload:product
      })}>Remove from Cart</Button>)
      :
      (<Button variant="primary" onClick={()=>dispatch({
        type:"ADD_TO_CART",
        payload:product
       })} disabled={!product.inStock}>{product.inStock?"Add to Cart":"Out of Stock"}</Button>)
       } 
        
      </Card.Body></Card>
    </div>
  )
}

export default SingleProduct
