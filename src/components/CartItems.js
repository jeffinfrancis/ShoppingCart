import React from "react";
import {AiFillDelete} from "react-icons/ai"
import { CartState } from "../Context/CartContext";
import './styles.css'

const CartItems = (props) => {
  const { Items,prodCount } = props;
  
  const {state,dispatch}=CartState()

  return (<span className="cartItem">
  
  
   
      <img className="cartItemImg" src={Items.image}/>
    
     <div className="cartItemDetail">
     {Items.name}<br/>{Items.price}$<br/>Count : {prodCount} Total : {Items.price*Number(prodCount)}$
     </div>
    
    
  
   <AiFillDelete onClick={()=>dispatch({
      type:"REMOVE_FROM_CART",
      payload:Items
    })} />
    </span>
)
  }
export default CartItems
