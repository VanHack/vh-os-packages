import * as React from "react";

function SvgMdiSearch(props) {
  return (
    <svg width={24} height={16} fill="none" {...props}>
      <g clipPath="url(#mdi_search_svg__a)">
        <path
          fill="#B6B2B2"
          d="M15.5 10h-.79l-.28-.27A6.471 6.471 0 0016 5.5 6.5 6.5 0 109.5 12c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 15l-4.99-5zm-6 0C7.01 10 5 7.99 5 5.5S7.01 1 9.5 1 14 3.01 14 5.5 11.99 10 9.5 10z"
        />
      </g>
      <defs>
        <clipPath id="mdi_search_svg__a">
          <path fill="#fff" d="M0 0h24v15.016H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgMdiSearch;
