/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import { useState } from 'react';

type PropsComponenteN = {
  label: string;
  options: string[];
  show: boolean;
  showMe: () => void;
};
function Menu({ label, options, show, showMe }: PropsComponenteN) {
  return (
    <div
      onMouseOver={showMe}
      onClick={showMe}
      style={{
        padding: 8,
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {label}
      <div
        className="menu"
        style={{
          display: !show ? 'none' : 'block',
        }}
      >
        <ul>
          {options.map((option) => (
            <li>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
