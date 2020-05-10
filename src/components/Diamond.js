import React from "react";
import { PURPLE } from "../lib/constants";

const Diamond = ({ x, y, fill = PURPLE, stroke = "black", onClick }) => {
  const style = {
    transform: `translateX(${x}px) translateY(${y}px)`,
  };
  return (
    <polygon
      className="diamond"
      points="87.5,0 175,50 87.5,100 0,50"
      fill={fill}
      style={style}
      stroke={stroke}
      strokeWidth={2}
      onClick={onClick}
    />
  );
};

export default Diamond;
