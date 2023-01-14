import React, { useRef, useState, useEffect } from "react";
import "./styles/App.css";
import Card from "./Components/Card";

const cards = [
  {
    project_name: "NFTS",
    image: "shibaNFT.png",
    skillDev: ["IPFS", "Solidity"],
    description: "A COMPLETER",
    githubLink: "",
  },
  {
    project_name: "gomoku",
    image: "gomoku.png",
    skillDev: ["AI", "Python"],
    description:
      "<p>Gomoku, also called Five in a Row, is an abstract strategy board game. It is <br/> traditionally played with Go pieces (black and white stones) on a Go board. It is <br/> played using a 15x15 board. </p><h2>Rules</h2> <p>Players alternate turns placing a stone of their color on an empty intersection.<br/>Black plays first. The winner is the first player to form an unbroken chain of five<br/> stones horizontally, vertically, or diagonally. Placing so that a line of more than<br/> five stones of the same color is created does not result in a win. These are called<br/> overlines.</p><h2>My Gomoku AI</h2><p>my AI uses a minimax with an alphabeta pruning. The program is designed in such<br/> a way that a human can confront the AI. The AI takes maximum 5 seconds to <br/>play.</p>",
    githubLink: "",
  },
  {
    project_name: "Lottery",
    image: "Lottery.png",
    skillDev: ["Chainlink VRF", "Next.Js", "Solidity"],
    description: "<p>It's a decentralized application for which I made the smart contracts and the<br/>front-end, where people can enter the lottery. then a winner is drawn, he wins <br/>the totality of the money in the lottery (constituted by the entry fees paid by<br/> the participants). to know who wins I used a protocol which allows to generate<br/> random numbers verifiable on the blockchain which is chainlink VRF. And for the<br/> front end I created a next application and used the Moralis library to make the<br/> connection between the smart contract and the front end.</p>",
    githubLink: "https://github1s.com/Sacha924/Lottery_SM-UX",
  },
  {
    project_name: "VOLTZ",
    image: "VOLTZ.png",
    skillDev: ["NFT"],
    description: "A COMPLETER",
    githubLink: "",
  },
  {
    project_name: "ETH Changes",
    image: "ETH_Price.png",
    skillDev: ["SQLite", "Next.Js", "Bash"],
    description:
      "it's a nextJS application that retrieves every 10 minutes the price of ethereum,<br/> and that will detect thanks to a 95% confidence interval, if the price is <br/> considered  as an anomaly or not. <br/><br/><br/>The project is divided into several parts:<br/><br/><ul><li>Filling the database: a bash script allows us to get data from an API,<br/> store this data in our DataBase, and then check if the data is <br/> abnormal and send a message if this is the case.<br/><br/><br/></li><li>Check if the data is abnormal: Another bash script allows us, by <br/> calling the same API (with a different entry point), to get the price <br/> of the ETH over the last month, at each hour. This data is stored in<br/> a txt file, and can be used to detect abnormal prices using the <br/> z-score, which is a measure of the number of standard deviations of <br/> a data point from the mean of a data set.</li></ul>",
    githubLink: "https://github1s.com/Sacha924/ETH-Price-Variation",
  },
  {
    project_name: "The Maze",
    image: "The_Maze.png",
    skillDev: ["C#"],
    description: "",
    githubLink: "",
  },
  {
    project_name: "Social Network",
    image: "socialNetwork.png",
    skillDev: ["PHP"],
    description: "",
    githubLink: "",
  },
  {
    project_name: "VeloMax",
    image: "VeloMax.png",
    skillDev: ["SQL", "C#"],
    description: "",
    githubLink: "",
  },
];

export default function App() {
  const listRef = useRef(null);
  const [intervalId, setIntervalId] = useState(20);
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    if (showIframe) setIntervalId(1e9);
    else setIntervalId(20);
    const interval = setInterval(() => {
      listRef.current.scrollLeft += 1;
    }, intervalId);
    return () => clearInterval(interval);
  }, [intervalId, showIframe]);

  const handleKeyPress = (e) => {
    if (e.key === "ArrowRight") {
      listRef.current.scrollLeft += 200;
    } else if (e.key === "ArrowLeft") {
      listRef.current.scrollLeft -= 200;
    } else if (e.key === " ") {
      if (intervalId != 1e9) setIntervalId(1e9);
      else setIntervalId(20);
    }
  };

  return (
    <div className="App" onKeyDown={handleKeyPress} tabIndex="0">
      <div className="CardList" ref={listRef} style={{ overflowX: "scroll", whiteSpace: "nowrap", overflowY: "hidden" }}>
        {cards.map((card) => (
          <Card project_name={card.project_name} image={card.image} skillDev={card.skillDev} description={card.description} githubLink={card.githubLink} parentCallback={setShowIframe} showIframe={showIframe} />
        ))}
      </div>
      <p style={{ background: "blue", width: "100px", height: "100px" }}> YO LE GANG </p>
    </div>
  );
}
