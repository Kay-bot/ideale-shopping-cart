import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import "./App.css";
import { menuData } from "./data/menuData";
import Order from "./components/Order";
import Loading from "./components/Loading";

const Routes = () => {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(menuData);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [data]);

  const handleUpdate = (name, price, qty) => {
    const newItem = { name, price, qty };

    setOrder((prevOrder) => {
      let matchingItem = prevOrder.filter(
        (orderitem) => orderitem.name === newItem.name
      );

      if (matchingItem.length !== 0) {
        matchingItem[0].qty = parseInt(matchingItem[0].qty) + 1;
        return prevOrder;
      }
      return [...prevOrder, newItem];
    });

    setTotal((prevState) => (prevState += price));
  };

  const resetOrder = () => {
    setOrder([]);
    setTotal(0);
  };

  const submitOrder = () => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(
      `Welcome We Love Shopping. You have ordered ${order.map(
        (item) => item.name
      )}. This comes to a total of ${total} dollars.`
    );
    synth.speak(utterThis);
  };

  return (
    <div className="App">
      <Header />
      {data.length === 0 ? (
        <Loading />
      ) : (
        <div className="menu">
          <div className="menuitems">
            {data.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                label={item.label}
                url={item.url}
                description={item.description}
                price={item.price}
                updateOrder={handleUpdate}
              />
            ))}
          </div>
          <Order
            order={order}
            total={total}
            handleReset={resetOrder}
            handleSubmit={submitOrder}
          />
        </div>
      )}
    </div>
  );
};

export default Routes;
