import React from "react";
import styled from "styled-components";

const MenuItem = ({ label, url, name, description, price, updateOrder }) => (
  <div className="menuitem__wrapper">
    <div>
      <span role="img" aria-label={label} className="menuitem__image">
        <urlImage src={url} />
      </span>
    </div>
    <div className="menuitem__column">
      <div className="menuitem__name">{name}</div>
      <div className="menuitem__description">{description}</div>
      <button
        className="menuitem__button"
        onClick={() => updateOrder(name, price, 1)}
      >
        add to order
      </button>
    </div>
    <div className="menuitem__price">${price}.00</div>
  </div>
);

export default MenuItem;

export const urlImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;
