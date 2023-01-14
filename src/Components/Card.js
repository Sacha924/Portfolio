import "../styles/Card.css";
import { useState, useRef } from "react";

export default function Card(props) {
  const [isRotated, setIsRotated] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const iframeRef = useRef(null);

  console.log("isRotated: " + isRotated);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };
  const handleIframe = (e) => {
    e.preventDefault();
    e.stopPropagation(); // This method stops the event from propagating up the DOM tree, so the click event on the link will not be passed on to the parent elements, including the card element.
    setShowIframe(!showIframe);
  };

  return (
    <div>
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
            <a href={props.githubLink} onClick={(e) => handleIframe(e)}>
              yo le gang
            </a>
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
      {showIframe && (
        <>
          <iframe className="myFrame" ref={iframeRef} src={props.githubLink} />{" "}
          <button className="exitButton" onClick={(e) => handleIframe(e)}>
            EXIT
          </button>
        </>
      )}
    </div>
  );
}
