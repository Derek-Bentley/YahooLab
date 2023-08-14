import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Sports from "./Sports";
import Trending from "./Trending";
import Mail from "./Mail";
import emoji from './emoji.svg';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Yahoo</h1>
          <div className="logo">
           <img alt="yahoo logo" src={emoji} />
          </div>

          <ul className="header">
            <li><NavLink exact to="/">News</NavLink></li>
            <li><NavLink to="/sports">Sports</NavLink></li>
            <li><NavLink to="/trending">Trending</NavLink></li>
            <li><NavLink to="/mail">Mail</NavLink></li>
          </ul>
          <div className="content">
	   <Routes>
            <Route exact path="/" element={<Home></Home>}/>
            <Route path="/sports" element={<Sports></Sports>}/>
            <Route path="/mail" element={<Mail></Mail>}/>
            <Route path="/trending" element={<Trending></Trending>}/>
	   </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main
