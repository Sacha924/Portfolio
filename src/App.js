import React, { useRef, useState, useEffect } from "react";
import "./styles/App.css";
import Card from "./Components/Card";
import SkillBox from "./Components/SkillBox";

const cards = require("./projectDatas.json");

const skillList = [{ name: "HTML" }, { name: "css" }, { name: "JS" }, { name: "Python" }, { name: "C#" }, { name: "SQL" }, { name: "PHP" }, { name: "Solidity" }, { name: "Node.js" }, { name: "React.js" }, { name: "Next.js" }, { name: "SQLite" }, { name: "NPM" }, { name: "VSCode" }, { name: "Git" }, { name: "Docker" }];

export default function App() {
  const cardListRef = useRef(null);
  const skillListRef = useRef(null);

  const [intervalId, setIntervalId] = useState(20);
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    if (showIframe) setIntervalId(1e9);
    else setIntervalId(20);
    const interval = setInterval(() => {
      skillListRef.current.scrollLeft += 1;
      cardListRef.current.scrollLeft += 1;
    }, intervalId);
    return () => clearInterval(interval);
  }, [intervalId, showIframe]);

  const handleKeyPress = (e) => {
    if (e.key === "ArrowRight") {
      cardListRef.current.scrollLeft += 200;
    } else if (e.key === "ArrowLeft") {
      cardListRef.current.scrollLeft -= 200;
    } else if (e.key === " ") {
      if (intervalId != 1e9) setIntervalId(1e9);
      else setIntervalId(20);
    }
  };

  return (
    <div className="App" onKeyDown={handleKeyPress} tabIndex="0">
      <div className="CardList" ref={cardListRef} style={{ overflowX: "scroll", whiteSpace: "nowrap", overflowY: "hidden" }}>
        {cards.map((card) => (
          <Card project_name={card.project_name} image={card.image} skillDev={card.skillDev} description={card.description} githubLink={card.githubLink} parentCallback={setShowIframe} showIframe={showIframe} />
        ))}
      </div>
      <div className="CompetenceList" ref={skillListRef} style={{ overflowX: "scroll", whiteSpace: "nowrap", overflowY: "hidden" }}>
        {skillList.map((skill) => (
          <SkillBox name={skill.name} />
        ))}
      </div>
    </div>
  );
}
