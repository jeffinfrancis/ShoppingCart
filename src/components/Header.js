import { Navbar, Container, Dropdown, Badge, Button } from "react-bootstrap";
import * as React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartState } from "../Context/CartContext";
import CartItems from "./CartItems";

function Header() {
  const { state } = CartState();
  const total_Price = state?.cart?.reduce((acc, item, index) => {
    return (acc += Number(item.price));
  }, 0);
  const product_count = state?.cart?.reduce((total, item) => {
    total[item.name] = (total[item.name] || 0) + 1;
    return total;
  }, {});

  const product_countHandler = (item) => {
    const result = Object.entries(product_count).filter(
      (prod) => prod[0] === item.name
    );

    return result[0][1];
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                alt=""
                src="../logo512.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{" "}
              Shopping Cart
            </Link>
          </Navbar.Brand>
          <Dropdown  align={{ lg: 'end' }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FontAwesomeIcon color="white" icon={faShoppingCart} />
              <Badge>{Object.entries(product_count).length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {state.cart.length > 0 ? (
                [...new Set(state.cart)].map((item, index) => (
                  <Dropdown.Item key={index}>
                    <CartItems
                      Items={item}
                      prodCount={product_countHandler(item)}
                    />
                  </Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item>No Items in cart</Dropdown.Item>
              )}
              {state.cart.length > 0 && (
                <Dropdown.Item>
                  <span style={{ fontWeight: "bold", backgroundColor: "gray" }}>
                    Total : {total_Price}$
                  </span>
                </Dropdown.Item>
              )}
              <Dropdown.Item>
                <Link to={"/checkout/"}>
                  <Button variant="primary">Go to Checkout</Button>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
