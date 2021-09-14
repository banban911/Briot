import React from "react";

function ToSurface() {
  function toTop() {
    setTimeout(() => {
      window.pageYOffset = 0;
    }, 2000);
  }

  return (
    <div>
      <button>
        <i class='bi bi-chevron-up' onClick={toTop}></i>
      </button>
    </div>
  );
}

export default ToSurface;
