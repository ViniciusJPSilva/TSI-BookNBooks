import React from "react";

export default function Card({title = "", content = ""}) {
  return (
    <div className="card custom-card">
      <div className="card-content">
        <span className="card-title fc-orange">
            <h3>{title}</h3>            
        </span> <hr/>
        <div>{content}</div>
      </div>
    </div>
  );
};

