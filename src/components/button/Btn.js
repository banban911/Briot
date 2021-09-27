import React from "react";
function Btn({ name, color, bgColor }) {
  return (
    <>
      <div
        className='btn'
        style={{
          backgroundColor: `${bgColor || "rgb(34, 34, 34)"}`,
          color: `${color || "#fff"}`,
          borderRadius: "8px",
        }}
      >
        {name}
      </div>
    </>
  );
}

export { Btn };
