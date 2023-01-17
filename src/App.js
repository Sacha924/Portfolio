import React, { useRef, useState, useEffect } from "react";
import "./styles/App.css";
import Card from "./Components/Card";
import SkillBox from "./Components/SkillBox";

const cards = require("./datas/projectDatas.json");
const skillList = require("./datas/skillsData.json");

export default function App() {
  const cardListRef = useRef(null);
  const skillListRef = useRef(null);

  const [intervalId, setIntervalId] = useState(20);
  const [isIframeOpen, setIsIframeOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      skillListRef.current.scrollLeft += 1;
      cardListRef.current.scrollLeft += 1;
    }, intervalId);
    return () => clearInterval(interval);
  }, [intervalId]);

  useEffect(() => {
    if (isIframeOpen) setIntervalId(1e9);
    else setIntervalId(20);
  }, [isIframeOpen]);

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
          <Card project_name={card.project_name} image={card.image} skillDev={card.skillDev} description={card.description} githubLink={card.githubLink} parentCallback={setIsIframeOpen} isIframeOpen={isIframeOpen} />
        ))}
      </div>
      <div className="CompetenceList" ref={skillListRef} style={{ overflowX: "scroll", whiteSpace: "nowrap", overflowY: "hidden" }}>
        <SkillBox skillList={skillList} />
      </div>
    </div>
  );
}
