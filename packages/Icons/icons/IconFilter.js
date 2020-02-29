import * as React from "react";

function SvgIconFilter(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      style={{
        margin: "0 5px 0 0"
      }}
      {...props}
    >
      <path fill="#646464" d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </svg>
  );
}

export default SvgIconFilter;
