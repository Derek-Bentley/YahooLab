import React, { Component } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Sports from "./Sports";
import Trending from "./Trending";

// Define your router configuration here, including the routes for Sports and Trending components


class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-header">
          <h2>Welcome to Yahoo</h2>
        </div>
        <div className="home-content">
          <div className="home-description">
            <p>Stay Informed with Yahoo!</p>
            <p>Explore a world of news, trending topics, and sports updates.</p>
          </div>
          <div className="home-actions">
            <div className="home-action">
              <h3>Explore Trending</h3>
              <p>Discover the top stories and current trends of the day.</p>
              <Link to="/trending">
                <button className="explore-button">Explore Now</button>
              </Link>
            </div>
            <div className="home-action">
              <h3>Sports Updates</h3>
              <p>Stay updated with the latest sports games and scores.</p>
              <Link to="/sports">
                <button className="explore-button">Check Sports</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
