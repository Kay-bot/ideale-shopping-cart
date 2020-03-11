import React from "react";

const Order = ({ order, total, handleSubmit, handleReset }) => (
  <div className="order__wrapper">
    <div className="order__title">My Order</div>
    {order.length === 0 ? (
      <React.Fragment>
        <div className="order__text">
          No items on cart. Why wait? Shop now from the menu.
        </div>
        <div className="order__item">
          <span role="img" aria-label="point">
            👈
          </span>
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        {order.map((item, index) => (
          <div className="order__item">
            <span>{item.name}</span>
            <span>${item.price}.00</span>
            <span>{item.qty}</span>
          </div>
        ))}
        <div className="order__total">
          <span>Total</span>
          <span>${total}</span>
        </div>
        <button className="order__submit" onClick={handleSubmit}>
          Submit
        </button>
        <button className="order__reset" onClick={handleReset}>
          Clear Cart
        </button>
        <label>
          Coupon:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Apply coupon" />
      </React.Fragment>
    )}
  </div>
);

export default Order;
