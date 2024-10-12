/*
Name: Ryan Lin
NetID: rlin1@iastate.edu
Date: 4/1/24
*/

import React, { useState, useEffect } from "react";
import items from "./products.json";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let itemFound = false;
    const updatedCart = cart.filter((cartItem) => {
      if (cartItem.id === el.id && !itemFound) {
        itemFound = true;
        return false;
      }
      return true;
    });
    if (itemFound) {
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  }, [cart]);

  const howManyOfThis = (id) => {
    return cart.filter((item) => item.id === id).length;
  };

  const listItems = items.map((el) => (
    <div className="row border-top border-bottom" key={el.id}>
      <div className="row main align-items-center">
        <div className="col-2"><img className="img-fluid" src={el.image} alt={el.title}/></div>
        <div className="col">
          <div className="row text-muted">{el.title}</div>
          <div className="row">{el.category}</div>
        </div>
        <div className="col">
          <button type="button" onClick={() => removeFromCart(el)}>-</button>
          {" "}
          <button type="button" onClick={() => addToCart(el)}>+</button>
        </div>
        <div className="col">
          ${el.price} <span className="close">&#10005;</span> {howManyOfThis(el.id)}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="text-center my-4">319 Shopping Cart</h3>
        </div>
        <div className="col align-self-center text-right text-muted">
          Products selected: {cart.length}
        </div>
      </div>
      <div className="float-end mt-4">
        <p className="mb-0 me-5 d-flex align-items-center">
          <span className="small text-muted me-2">Order total:</span>
          <span className="lead fw-normal">${cartTotal.toFixed(2)}</span>
        </p>
      </div>
      <h3 className="text-center my-4">Product Catalog</h3>
      <div>{listItems}</div>
    </div>
  );
  
};

export default Shop;
