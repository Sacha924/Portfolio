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
      <Card name="NFTS" image="shibaNFT.png" skillDev={["IPFS", "Solidity"]} />
      <Card name="gomoku" image="gomoku.png" skillDev={["AI", "Python"]} />
      <Card name="Lottery" image="Lottery.png" skillDev={["Chainlink VRF", "Next.Js", "Solidity"]} />
      <Card name="VOLTZ" image="VOLTZ.png" skillDev={["NFT"]} />
      <Card name="ETH Changes" image="ETH_Price.png" skillDev={["SQLite", "Next.Js", "Bash"]} />
      <Card name="The Maze" image="The_Maze.png" skillDev={["C#"]} />
      <Card name="Social Network" image="socialNetwork.png" skillDev={["PHP"]} />
      <Card name="VeloMax" image="VeloMax.png" skillDev={["SQL", "C#"]} />
    </div>
  );
}
