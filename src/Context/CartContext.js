import React, { Children, createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, filterReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99)

const CartContext = ({ children }) => {
  //faker.mersenne.seed(99)
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: `${faker.image.food()}?random=${Math.round(Math.random() * 1000)}`,
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const initialState = {
    products: products,
    cart: [],
  };


  const filterInitialState={
    sort:"",
    rating:0,
    bystock:false,
    byfastDelivery:false
  }

  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [filterState,filterDispatch]= useReducer(filterReducer, filterInitialState)

  return <Cart.Provider value={{ state, dispatch,filterState,filterDispatch }}>{children}</Cart.Provider>;
};

export default CartContext;

export const CartState = () => {
  return useContext(Cart);
};
