import React from "react";

const Coupon = () => (
  <div className="header__wrapper">
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Coupon;
