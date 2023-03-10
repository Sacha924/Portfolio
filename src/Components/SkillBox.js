import React, { useState, useEffect } from "react";
import "./../styles/SkillBox.css";

export default function SkillBox(props) {
  const [currentIndex, setCurrentIndex] = useState(11);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1));
    }, 4200);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const rendered = [];
  for (let i = 0; i < currentIndex; i++) {
    rendered.push(<img key={i} className="competence" src={props.skillList[i % props.skillList.length].imageLink} />);
  }

  return (
    <>
      <div>{rendered}</div>
    </>
  );
}
