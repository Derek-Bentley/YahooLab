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
import emoji from './yahoo-mail.png';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <div className="logo-container">
            <img
                src="https://s.yimg.com/ny/api/res/1.2/vlvd6fw1UHI9T_3GaNPzDw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02OTI-/https://s.yimg.com/os/creatr-uploaded-images/2019-09/a929b8f0-dd65-11e9-bffe-b90463fd5188"
                alt="Yahoo Logo"
                className="yahoo-logo"
            />
        </div>

          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
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
