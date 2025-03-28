import * as React from "react";

function SvgArrowDown(props) {
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path d="M23.245 4L12 18.374.781 4 0 4.619 12 20 24 4.609 23.245 4z" />
    </svg>
  );
}

export default SvgArrowDown;
