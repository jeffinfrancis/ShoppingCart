import React,{useState,useEffect} from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Image, FormControl, Form } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import CheckoutSummary from "../components/CheckoutSummary";
import Rating from "../components/Rating";
import "../components/styles.css";
import { CartState } from "../Context/CartContext";

const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
const [total, setTotal] = useState(0)
 useEffect(() => {
  setTotal(cart.reduce((acc,curr)=>acc+ Number(curr.price),0))
 }, [cart])
 

  return (
    <div className="checkoutsummary">
      <Container>
        <ListGroup>
          {cart.map((item, index) => (
            <ListGroupItem>
              <Row>
              <Col md={2}>
                <Image src={item.image} fluid rounded/>
                  {/* <img className="cartItemImg" src={item.image} /> */}
                </Col>
                <Col md={2}>{item.name}</Col>
                <Col md={2}>{item.price} $</Col>
                
                <Col md={2}>
                  <Rating rating={item.ratings} disabled={true} />
                </Col>
                <Col md={2}>
                <Form.Control as="select" >
                    
                    { [...Array(item.inStock)].map((itm,index)=>
                     (<option key={index}>{index+1}</option>
                     )
                     )}
                </Form.Control>
                </Col>
                <Col md={2}>
                  <AiFillDelete
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      })
                    }
                    style={{cursor:"pointer"}}
                  />
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
      <div className="sidebar">
        <CheckoutSummary count={cart.length} total={total} />
      </div>
    </div>
  );
};

export default Checkout;
