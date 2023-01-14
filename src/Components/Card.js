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
          <h1 className="title">{props.project_name}</h1>
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
        <div className="rotated-container">
          <h1 className="title">{props.project_name}</h1>
          <div className="projectDescription" dangerouslySetInnerHTML={{ __html: props.description }} />
          <a href={props.githubLink}>yo le gang</a>
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
      )}
    </div>
  );
}
