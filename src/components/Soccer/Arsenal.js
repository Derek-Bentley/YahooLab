import React from "react";
import arsenal from "./Arsenal.png";
import "./Arsenal.css";

export default function Arsenal() {
  return (
    <div className="container">
      <img className="image" alt="arsenal" src={arsenal} />
      <div className="text">
        <p className="hs" data-hover="true">Arsenal Gain Big 3 Points</p>
        <aside className="body">
        Arsenal looked in total control, far likelier to score a second than find themselves pegged back, when Ayew spun Tomiyasu on the right flank near halfway and went to ground. Contact appeared accidental at best, although with yards of space in front of him there was little obvious reason for Ayew to dive. David Coote reached for his pocket and, because he had already booked Tomiyasu for timewasting at a throw-in, gave himself little option but to inflict the ultimate punishment.
        </aside>
      </div>
    </div>
  );
}
