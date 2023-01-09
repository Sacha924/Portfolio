import React, { useRef, useEffect } from 'react';
import './App.css';
import Card from './Card';

export default function App() {
  const listRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      listRef.current.scrollLeft += 1;
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="App"
      ref={listRef}
      style={{ overflowX: 'scroll', whiteSpace: 'nowrap', overflowY: 'hidden' }}
    >
      <Card name="gomoku" image="gomoku.png" />
      <Card name="The Maze" image="gomoku.png" />
      <Card name="NFTS" image="gomoku.png" />
      <Card name="ICO" image="gomoku.png" />
      <Card name="Lottery" image="gomoku.png" />
      <Card name="VeloMax" image="gomoku.png" />
    </div>
  );
}
