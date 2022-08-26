import React, { Component } from "react";
import figure from './figure.svg'
class Home extends Component {
  render() {
    return (
      <div>
        <h2>WELCOME!</h2>
        <p>Thank you for choosing FIGURE IT OUT! We are here to help and cater to buyers and sellers of collectibles of all kinds.\
          Our goal is to allow you to have a safe and trustworth transaction.
        </p>
      </div>
            <>
            <img alt ="Figures" src={figure} />
          </>
    );
  }
}
 
export default Home;