import * as React from "react";

function SvgDot(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx={11.5} cy={11.5} r={4.5} />
    </svg>
  );
}

export default SvgDot;
