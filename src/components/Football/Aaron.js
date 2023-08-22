import React from "react";
import aaron from "./Aaron.png";
import "./Aaron.css";

export default function Aaron() {
  return (
    <div className="container">
      <img className="image" alt="aaron rodgers" src={aaron} />
      <div className="text">
        <p className="hs" data-hover="true">Aaron Rodgers risky Preseason action</p>
        <aside className="body">
          Aaron Rodgers knows what he needs to do to feel good and ready for the regular season better than I do. 

          “Hard Knocks” will have a more compelling episode with Aaron Rodgers playing in Saturday night’s preseason finale against the Giants than with him on the sideline with headphones, watching Zach Wilson and Tim Boyle. 

          If you are the Jets’ fan, you cannot wait for the moment No. 8 trots into his huddle, your huddle. 
        </aside>
      </div>
    </div>
  );
}
