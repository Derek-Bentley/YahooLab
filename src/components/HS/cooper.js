import React from "react";
import HSPic from "./cooper.png";
import "./cooper.css";

export default function Cooper() {
  return (
    <div className="container">
      <img className="image" alt="cooper flagg" src={HSPic} />
      <div className="text">
        <p className="hs" data-hover="true">Cooper Flagg takes the nation by storm</p>
        <aside className="body">
          Cooper Flagg created a splash online Friday with a social media post following his visit this week to Duke University, but the Newport native has yet to make a commitment to play basketball at the school, his mother said.
          Flagg, 16, one of the top high school basketball prospects in the country, has received scholarship offers from several NCAA Division I powerhouse programs. The 6-foot-8, 200-pound Flagg will enter his junior year this fall at Montverde Academy in Florida, one of the top high school programs in the country. He is ranked first nationally among Class of 2025 prospects according to Rivals.com, and second according to ESPN’s recruiting database. Since leading the Nokomis boys’ basketball team to the Class A championship in 2022, Flagg has continued his meteoric rise at Montverde. He was third on the team with 9.8 points per game, and led the Eagles with 1.6 steals and 2.2 blocks per contest.
        </aside>
      </div>
    </div>
  );
}
