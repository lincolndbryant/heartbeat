const SVG_FILTERS = `
<filter id="neon">
  <feFlood flood-color="rgb(255,255,128)" flood-opacity="0.5" in="SourceGraphic" />
  <feComposite operator="in" in2="SourceGraphic" />
  <feGaussianBlur stdDeviation="10" />
  <feComponentTransfer result="glow1">
      <feFuncA type="linear" slope="4" intercept="0" />
  </feComponentTransfer>
  <feMerge>
      <feMergeNode in="glow1" />
      <feMergeNode in="SourceGraphic" />
  </feMerge>
</filter>
`;

export default SVG_FILTERS;
