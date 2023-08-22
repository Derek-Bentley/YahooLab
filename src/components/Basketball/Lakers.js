import React from "react";
import lakers from "./Lakers.png";
import "./Lakers.css";

export default function Lakers() {
  return (
    <div className="container">
      <img className="image" alt="cooper flagg" src={lakers} />
      <div className="text">
        <p className="hs" data-hover="true">Lakers Look to Add Depth</p>
        <aside className="body">
        After a flurry of excellent signings at the beginning of NBA free agency the Los Angeles Lakers roster has sat at 13 players as the front office evaluates what is the next move to make. Los Angeles can bring in two more players and will definitely bring in one before the season starts.

The most obvious need for the Lakers is the center position with general manager Rob Pelinka admitting that the team was active in the center market. That was weeks ago, though, and the current market is depleted. There is not much to get excited about.
        </aside>
      </div>
    </div>
  );
}
