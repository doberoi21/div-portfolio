// import React from "react";
import WebDeveloper from "../../assets/Work-Experience/web-developer.gif";
import "./style/Work-Exp.css";

function WorkCard({ work }) {
  return (
    <div className="work-card-container">
      <div className="work-card-img-container">
        <img src={WebDeveloper} alt="web-dev" height={50} width={50} />
        <p> {work.position}</p>
      </div>
      <div className="work-card-company-details">
        <p>
          {work.company} | <i>{work.duration}</i>
        </p>
        <p>{work.place}</p>
      </div>

      <ul className="work-details-desc">
        {work.description?.map((description) => (
          <li>{description}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkCard;
