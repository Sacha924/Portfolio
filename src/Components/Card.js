import "../styles/Card.css";
import { useState } from "react";

export default function Card(props) {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    console.log("isRotated: " + isRotated);
  };
  return (
    <div className={`card ${isRotated ? "rotated" : ""}`} onClick={handleClick}>
      {!isRotated ? (
        <div>
          <h1 className="title">{props.name}</h1>
          <img className="imageInCard" src={`images/${props.image}`} />
          <div className="easterEgg">
            <a href="https://dino-chrome.com/fr">Easter egg</a>
          </div>
          <div className="skills">
            {props.skillDev &&
              props.skillDev.map((skill) => {
                return (
                  <div className="skill" data-skill={skill}>
                    {skill}
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="title">{props.name}</h1>
          <p style={{fontFamily:"Georgia"}}>ceci est un test, ce paragraphe</p>
          

        </div>
      )}
    </div>
  );
}
