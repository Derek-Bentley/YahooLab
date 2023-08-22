import React, { Component } from "react";

class Mail extends Component {
  render() {
    return (
      <div className="mail-container">
        <div className="mail-header">
          <h2>Welcome to Yahoo Mail</h2>
        </div>
        <div className="mail-content">
          <div className="login-form">
            <h3>Login to Your Account</h3>
            <form>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" />
              <button className="login-button">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Mail;
