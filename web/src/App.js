import React from "react";
import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import "./App.css";
import { menuData } from "./data/menuData";
import Order from "./components/Order";
import Loading from "./components/Loading";

class App extends React.Component {
  state = {
    order: [],
    total: 0,
    data: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: menuData });
    }, 3000);
  }

  handleUpdate = (name, price) => {
    const newItem = { name, price };
    this.setState({
      order: this.state.order.concat(newItem),
      total: this.state.total + price
    });
  };

  resetOrder = () => {
    this.setState({
      order: [],
      total: 0
    });
  };

  submitOrder = () => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(
      `Welcome to We Love Shopping. You have ordered ${this.state.order.map(
        (item) => item.name
      )}. This comes to a total of ${this.state.total} dollars.`
    );
    synth.speak(utterThis);
  };

  render() {
    const { total, order, data } = this.state;
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
                  updateOrder={this.handleUpdate}
                />
              ))}
            </div>
            <Order
              order={order}
              total={total}
              handleReset={this.resetOrder}
              handleSubmit={this.submitOrder}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
