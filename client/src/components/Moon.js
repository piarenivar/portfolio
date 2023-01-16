import * as React from "react";

const Moon = ({ size = 24, color = "#12263a", ...props }) => (
   <svg
      width={size}
      height={size}
      className="moon"
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path d="M20.752 15.952A9.6 9.6 0 0 1 8.048 3.248a9.601 9.601 0 1 0 12.704 12.704Z" />
   </svg>
);

export default Moon;