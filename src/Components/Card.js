import "../styles/Card.css";
import { useState, useRef } from "react";

export default function Card(props) {
  const [isRotated, setIsRotated] = useState(false);
  const [hasBeenRotated, setHasBeenRotated] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const iframeRef = useRef(null);

  const handleClick = () => {
    setIsRotated(!isRotated);
    setHasBeenRotated(true);
  };
  const handleIframe = (e) => {
    e.preventDefault();
    e.stopPropagation(); // This method stops the event from propagating up the DOM tree, so the click event on the link will not be passed on to the parent elements, including the card element.
    props.parentCallback(!props.isIframeOpen);
    setShowIframe(!showIframe);
  };

  

  return (
    <div>
      <div className={`card ${isRotated ? "rotated" : hasBeenRotated ? "reverse" : ""}`} onClick={handleClick}>
        {!isRotated ? (
          <div>
            <h1 className="title">{props.project_name}</h1>
            <img className="imageInCard" src={`images/${props.image}`} />
            <div className="easterEgg">
              <a href="https://dino-chrome.com/fr">Easter egg</a>
            </div>
            <div className="skills">
              {props.skillDev &&
                props.skillDev.map((skill, key) => {
                  return (
                    <div key={key} className="skill" data-skill={skill}>
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
            {props.githubLink !== "" && (
              <a style={{ marginTop: "75px", fontSize: "15px" }} href={props.githubLink} onClick={(e) => handleIframe(e)}>
                Open project source code
              </a>
            )}
            <div className="skills">
              {props.skillDev &&
                props.skillDev.map((skill, key) => {
                  return (
                    <div key={key} className="skill" data-skill={skill}>
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
          <iframe className="myFrame" ref={iframeRef} src={props.githubLink} />

          <button className="exitButton" onClick={(e) => handleIframe(e)}>
            EXIT
          </button>
        </>
      )}
    </div>
  );
}
