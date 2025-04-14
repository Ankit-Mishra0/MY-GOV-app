import React from "react";

function Card(props) {
  const {variant="main"}=props;
  return (
    <div className={`social_card main-content ${variant === "all" ? "all-card" : "main-card"}`}>
      <div className="card">
        <div className="LeaderImg">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="LeaderName">
          <h2>{props.name}</h2>
        </div>
        <div className="aboutLeader">
          <h3>{props.about}</h3>
        </div>
      </div>
    </div>
  );
}
export default Card;
