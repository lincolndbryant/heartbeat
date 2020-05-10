import React, { useState } from "react";
import { PURPLE } from "../lib/constants";

const Hexagon = ({
  x,
  y,
  fill = PURPLE,
  stroke = "black",
  onClick = () => {},
}) => {
  const [glow, setGlow] = useState(false);

  const handleClick = () => {
    setGlow(true);
    onClick();
    setTimeout(() => {
      setGlow(false);
    }, 200);
  };

  const style = {
    transform: `translateX(${x}px) translateY(${y}px)`,
  };
  return (
    <polygon
      className="hexagon"
      points="87.5,0 175,50 175,150 87.5,200 0,150 0,50 87.5,0"
      fill={fill}
      style={style}
      stroke={stroke}
      strokeWidth={2}
      filter={glow ? "url(#neon)" : null}
      onClick={handleClick}
    />
  );
};

export default Hexagon;
