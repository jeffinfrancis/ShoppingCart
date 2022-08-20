import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "./Rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import {Rating} from 'react-simple-star-rating'
import "./styles.css";
import { CartState } from "../Context/CartContext";

const Filters = () => {
  const {
    filterState: { rating, sort, bystock, byfastDelivery },
    filterDispatch,
  } = CartState();

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          type="radio"
          checked={sort === "LowtoHigh" ? true : false}
          id={`inline-1`}
          onChange={() =>
            filterDispatch({
              type: "PRODUCT_SORT",
              payload: {
                sort: "LowtoHigh",
              },
            })
          }
          name="group1"
          label="Ascending"
        />
      </span>
      <span>
        <Form.Check
          inline
          type="radio"
          onChange={() =>
            filterDispatch({
              type: "PRODUCT_SORT",
              payload: {
                sort: "HightoLow",
              },
            })
          }
          name="group1"
          checked={sort === "HightoLow" ? true : false}
          id={`inline-2`}
          label="Decending"
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name="group1"
          onChange={() =>
            filterDispatch({
              type: "INSTOCK",
            })
          }
          type="checkbox"
          checked={bystock}
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery only"
          name="group1"
          type="checkbox"
          onChange={() =>
            filterDispatch({
              type: "FAST_DELIVERY",
            })
          }
          checked={byfastDelivery}
          id={`inline-4`}
        />
      </span>
      <span>
        {/* <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
        //className='foo' // Will remove the inline style if applied
      />{rating} */}
      </span>
      <span>
        <Rating
          rating={rating}
          starClick={(e) =>
            filterDispatch({
              type: "RATING",
              payload: {
                rating: e,
              },
            })
          }
          style={{ cursor: "pointer" }}
        />
        <label> {rating}</label>
      </span>
      <span>
        <Button
          variant="light"
          onClick={() =>
            filterDispatch({
              type: "CLEAR_FILTERS",
              payload: {
                sort: "",
                rating: 0,
                bystock: false,
                byfastDelivery: false,
              },
            })
          }
        >
          Clear Filter
        </Button>
      </span>
    </div>
  );
};

export default Filters;
