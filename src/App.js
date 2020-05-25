import React, { useEffect, useState } from "react";
import "./App.css";
import heartSrc from "./img/heart.svg";
import ShapeContainer from "./components/ShapeContainer";
import { playSound, startBeat, sequencePromise } from "./lib/audio";

function App() {
  const [beat, setBeat] = useState();
  useEffect(() => {
    sequencePromise.then(setBeat);
  }, []);

  return (
    <>
      <nav>
        <button onClick={startBeat}>Start</button>
      </nav>
      <main className="app">
        <img className="heart-bg" src={heartSrc} alt="" />
        <ShapeContainer playSound={playSound} />
      </main>
    </>
  );
}

export default App;
