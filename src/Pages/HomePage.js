import React from "react";
import SingleProduct from "../components/SingleProduct";
import { CartState } from "../Context/CartContext";
import "../components/styles.css";
import Filters from "../components/Filters";

const HomePage = () => {
  const {
    state,
    filterState: { rating, bystock, byfastDelivery, sort },
  } = CartState();

 
  const filteredProducts = () => {
    let sortedProducts = state.products;
    // Filter ASC/DESC
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "LowtoHigh" ? a.price - b.price : b.price - a.price
      );
    }
    //Filter By Stock
   if (!bystock) sortedProducts= sortedProducts.filter((itm) => itm.inStock);
   //Filter By FastDelivery
    if (byfastDelivery)
    sortedProducts= sortedProducts.filter(
        (itm) => itm.fastDelivery === byfastDelivery
      );
      //Filter By Rating
     if (rating) sortedProducts= sortedProducts.filter((itm) => itm.ratings >= rating);
    return sortedProducts
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {filteredProducts().map((prod, index) => {
          return <SingleProduct key={index} product={prod} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
