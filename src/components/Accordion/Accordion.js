import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({ accordionData }) => {
  const [isActive, setIsActive] = useState(0);

  function setActiveList(id){
      let newActive = id;
      if(isActive==id)
      newActive = 0
      console.log(id,newActive)
      setIsActive(newActive);
  }


  return (
    <ul className="accordion" data-testid="accordion">
      {accordionData.map(({ id, heading, content }) => (
        <li className="accordion-item" data-testid={`list${id}`}>
          <div
            className="accordion-toggle"
            onClick={() => setActiveList(id)}
          >
            <h3>{heading}</h3>
            <span>{isActive == id ? "-" : "+"}</span>
          </div>
          {isActive == id && (
            <div className="accordion-content" data-testid={`content${id}`}>
              {content}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
