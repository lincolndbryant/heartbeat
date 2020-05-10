import React from "react";
import "./App.css";
import heartSrc from "./img/heart.svg";
import ShapeContainer from "./components/ShapeContainer";
import { playSound } from "./lib/audio";

function App() {
  return (
    <main className="app">
      <img className="heart-bg" src={heartSrc} alt="" />
      <ShapeContainer playSound={playSound} />
    </main>
  );
}

export default App;
