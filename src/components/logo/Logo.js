import React from "react";
function Logo({ bgColor, color, width }) {
  return (
    <svg
      width={`${width || "2.5rem"}`}
      style={{ backgroundColor: bgColor, borderRadius: "50%" }}
      className='p-2'
      viewBox='0 0 34 35'
      fill={bgColor}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.652 31.6814L16.0762 27.5918L31.2953 28.3812L30.6117 34.9265L17.652 31.6814Z'
        fill={color}
      />
      <path
        d='M21.2979 0L0 10.143L3.29288 25.427H7.63846L6.88745 14.4946L7.55501 14.2843L10.1675 25.427H14.68L14.5131 12.1101L15.1807 11.8998L17.4626 25.427H22.2415L23.368 9.34061L24.0355 9.13031L25.2166 25.427H31.536L33.7601 3.05746L21.2979 0Z'
        fill={color}
      />
    </svg>
  );
}

export { Logo };
