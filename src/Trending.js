import React, { Component } from "react";
import "./Trending.css"; // Import your CSS file for styling

class Trending extends Component {
  render() {
    return (
      <div className="trending-container">
        <h2 className="trending-heading">Today's Top 5</h2>
        <ul className="trending-list">
          <li className="trending-item">
            <div className="trending-item-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/808px-Donald_Trump_official_portrait.jpg"
                alt="Donald Trump"
              />
            </div>
            <div className="trending-item-details">
              <span className="trending-item-title">Donald Trump</span>
              <span className="trending-item-description">
                Former President of the United States
              </span>
            </div>
          </li>
          <li className="trending-item">
            <div className="trending-item-image">
              <img
                src="https://media.gettyimages.com/id/1359780363/photo/jake-paul-v-tyron-woodley.jpg?s=594x594&w=gi&k=20&c=xp5g2iZMrbKb1lkSMPykWCDfm76GAEO4FS0tLXSs3LA="
                alt="Jake Paul"
              />
            </div>
            <div className="trending-item-details">
              <span className="trending-item-title">Jake Paul</span>
              <span className="trending-item-description">
                Social Media Influencer and Boxer
              </span>
            </div>
          </li>
          <li className="trending-item">
            <div className="trending-item-image">
              <img
                src="https://people.com/thmb/KbXaWZcOfoOjVstqnS3Bd4AgiCo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(551x689:553x691)/Barbie-84bbd2b2160c41c3b051221a3cb382a6.jpg"
                alt="Barbie"
              />
            </div>
            <div className="trending-item-details">
              <span className="trending-item-title">Barbie</span>
              <span className="trending-item-description">
                Iconic Fashion Doll
              </span>
            </div>
          </li>
          <li className="trending-item">
            <div className="trending-item-image">
              <img
                src="data:image/png;base64,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"
                alt="EA Sports FC"
              />
            </div>
            <div className="trending-item-details">
              <span className="trending-item-title">EA Sports FC</span>
              <span className="trending-item-description">
                Virtual Football Club
              </span>
            </div>
          </li>
          <li className="trending-item">
            <div className="trending-item-image">
              <img
                src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/13439425/shutterstock_285980522.jpg"
                alt="Global Warming"
              />
            </div>
            <div className="trending-item-details">
              <span className="trending-item-title">Global Warming</span>
              <span className="trending-item-description">
                Environmental Concerns
              </span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Trending;
