import React, { useState, useEffect } from "react";
import "./../styles/SkillBox.css";

export default function SkillBox(props) {
  const [currentIndex, setCurrentIndex] = useState(10);
  console.log(props.skillList);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const rendered = [];
  for (let i = 0; i < currentIndex; i++) {
    rendered.push(<img className="competence" src={props.skillList[i % props.skillList.length].imageLink} />);
  }

  return (
    <>
      <div>{rendered}</div>
    </>
  );
}
