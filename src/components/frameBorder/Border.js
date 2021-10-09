import React from "react";

function Border({ onHover }) {
  return onHover ? (
    <>
      <svg
        className='border_frame'
        viewBox='0 0 1456 208'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.7012 1.88667H1430.99L1454.27 28.4622V206.113H1.7012V1.88667Z'
          stroke='white'
        />
      </svg>
    </>
  ) : (
    <svg viewBox='0 0 1456 208' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1454.27 1.88667V28.2741V206.113H1.7012V1.88667H1454.27Z'
        stroke='white'
      />
    </svg>
  );
}

export default Border;
