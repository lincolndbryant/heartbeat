import React, { Fragment } from "react";
import Hexagon from "./Hexagon";
import Diamond from "./Diamond";
import { MAUVE } from "../lib/constants";
import SvgFilters from "./SvgFilters";

const WIDTH = 175;
const Y_OFFSET = 150;
const X_CENTER = WIDTH / 2 + WIDTH;
const PADDING = 10;
const svgSize = WIDTH * 4 + PADDING * 2;

const HEX_COORDS = [
  [WIDTH / 2, 0],
  [WIDTH / 2 + WIDTH * 2, 0],

  [0, Y_OFFSET],
  [WIDTH, Y_OFFSET],
  [WIDTH * 2, Y_OFFSET],
  [WIDTH * 3, Y_OFFSET],

  [WIDTH / 2, Y_OFFSET * 2],
  [WIDTH / 2 + WIDTH, Y_OFFSET * 2],
  [WIDTH / 2 + WIDTH * 2, Y_OFFSET * 2],

  [WIDTH, Y_OFFSET * 3],
  [WIDTH * 2, Y_OFFSET * 3],
];

const ShapeContainer = ({ playSound }) => {
  const renderBox = ([x, y], key) => {
    return (
      <Fragment key={key}>
        <Hexagon
          x={PADDING + x}
          y={PADDING + y}
          onClick={() => playSound(key)}
        />
        <Diamond
          x={PADDING + x}
          y={PADDING + y}
          fill={MAUVE}
          onClick={() => playSound(key)}
        />
      </Fragment>
    );
  };

  return (
    <div className="shape-container">
      <svg width={svgSize} height={svgSize}>
        <defs dangerouslySetInnerHTML={{ __html: SvgFilters }} />
        <Diamond x={PADDING + X_CENTER} y={PADDING + 100} />
        {HEX_COORDS.map(renderBox)}
        <Diamond
          x={PADDING + X_CENTER}
          y={PADDING + Y_OFFSET * 4}
          fill={MAUVE}
        />
      </svg>
    </div>
  );
};

export default ShapeContainer;
