import React, { useRef, useEffect } from "react";
import "./styles/App.css";
import Card from "./Components/Card";

export default function App() {
  const listRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      listRef.current.scrollLeft += 1;
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App" ref={listRef} style={{ overflowX: "scroll", whiteSpace: "nowrap", overflowY: "hidden" }}>
      <Card name="NFTS" image="shibaNFT.png" />
      <Card name="gomoku" image="gomoku.png" />
      <Card name="Lottery" image="Lottery.png" />
      <Card name="VOLTZ" image="VOLTZ.png" />
      <Card name="ETH Changes" image="ETH_Price.png" />
      <Card name="The Maze" image="The_Maze.png" />
      <Card name="Social Network" image="socialNetwork.png" />
      <Card name="VeloMax" image="VeloMax.png" />
    </div>
  );
}
