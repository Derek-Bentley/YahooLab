import React, { Component } from "react";
//import cooper from "./cooper.png";
import Cooper from "./components/HS/cooper.js";
import Arsenal from "./components/Soccer/Arsenal.js";
import Lakers from "./components/Basketball/Lakers.js";
import Aaron from "./components/Football/Aaron.js";
class Sports extends Component {
  render() {
    return (
      <div>
        <h2 clasName="soccer">Soccer</h2>
            <Arsenal/>
              
        <h2 className= "basketball">Basketball</h2>
            <Lakers/>
        <h2 className="HS">HS Sports</h2>
            <Cooper/>
  
        <h2 className ="Football">Football</h2>
            <Aaron/>
            
      </div>
    );
  }
}
 
export default Sports;