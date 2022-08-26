import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home.js";
import Comics from "./Comics.js";
import Cards from "./Cards.js";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>FIGURE IT OUT!</h1>
            <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/comics">Comics</NavLink></li>
                <li><NavLink to="/contact">Cards</NavLink></li>
            </ul>
            <div className="content">
                <Routes>
                    <Route exact={true} path="/" element={<Home />}/>
                    <Route path="/comics" element={<Comics />}/>
                    <Route path="/contact" element={<Cards />}/>
                </Routes>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
export default Main;