import React from 'react';
import './FontResizer.css';

const FontResizer = ({ targetId }) => {
  const changeFontSize = (increment) => {
    const content = document.getElementById(targetId);
    const currentFontSize = parseFloat(getComputedStyle(content).fontSize);
    content.style.fontSize = (currentFontSize + increment) + "px";
  };

  return (
    <div className="font-resizer">
      <button onClick={() => changeFontSize(-1)}>-</button>
      <button onClick={() => changeFontSize(1)}>+</button>
    </div>
  );
};

export default FontResizer;
