import React, { Component } from "react";
import "./Crypto.css";

class Crypto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptocurrencies: [
        { name: "Bitcoin", price: 40000, quantity: 0 },
        { name: "Ethereum", price: 2800, quantity: 0 },
        { name: "Litecoin", price: 150, quantity: 0 },
      ],
      cart: [],
      message: "",
    };
  }

  handleQuantityChange = (index, event) => {
    const { value } = event.target;
    const cryptocurrencies = [...this.state.cryptocurrencies];
    cryptocurrencies[index].quantity = parseInt(value, 10);
    this.setState({ cryptocurrencies });
  };

  handleBuyClick = (index) => {
    const { cryptocurrencies, cart } = this.state;
    const selectedCrypto = cryptocurrencies[index];

    if (selectedCrypto.quantity > 0) {
      const updatedCart = [...cart];
      const existingItemIndex = updatedCart.findIndex(
        (item) => item.name === selectedCrypto.name
      );

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].quantity += selectedCrypto.quantity;
        updatedCart[existingItemIndex].totalCost =
          updatedCart[existingItemIndex].quantity * selectedCrypto.price;
      } else {
        updatedCart.push({
          name: selectedCrypto.name,
          quantity: selectedCrypto.quantity,
          totalCost: selectedCrypto.quantity * selectedCrypto.price,
        });
      }

      this.setState({
        cart: updatedCart,
        message: "",
      });
    } else {
      this.setState({ message: "Please enter a quantity" });
    }
  };

  handleRemoveFromCart = (itemIndex) => {
    const updatedCart = [...this.state.cart];
    updatedCart.splice(itemIndex, 1);
    this.setState({ cart: updatedCart });
  };

  getTotalCost = () => {
    const { cart } = this.state;
    return cart.reduce((total, item) => total + item.totalCost, 0);
  };

  render() {
    const { cryptocurrencies, cart, message } = this.state;

    return (
      <div className="crypto-storefront">
        <h1>Crypto Interface</h1>
        <div className="crypto-list">
          {cryptocurrencies.map((crypto, index) => (
            <div key={index} className="crypto-card">
              <h2>{crypto.name}</h2>
              <p>Price: ${crypto.price}</p>
              <input
                type="number"
                min="0"
                placeholder="Quantity"
                onChange={(event) => this.handleQuantityChange(index, event)}
              />
              <button onClick={() => this.handleBuyClick(index)}>Buy</button>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <div>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - Quantity: {item.quantity} - Total Cost: $
                    {item.totalCost}
                    <button onClick={() => this.handleRemoveFromCart(index)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <p>Total Cost: ${this.getTotalCost()}</p>
            </div>
          )}
        </div>
        {message && <p className="error-message">{message}</p>}
      </div>
    );
  }
}

export default Crypto;
