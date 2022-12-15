/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */

import { useState } from 'react';

type PropsComponenteN = {
  menudesplegable: string;
  classes?: string;
};
function Menu({ menudesplegable }: PropsComponenteN) {
  const [mostrar, setMostrar] = useState(false);
  return (
    <div
      onClick={(e) => setMostrar(!mostrar)}
      style={{
        padding: 8,
        color: '#2e2e2e',
        background: '#FFFFFF',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {menudesplegable}
      <div
        style={{
          display: !mostrar ? 'none' : 'block',
          color: '#2e2e2e',
          background: '#FFFFFF',
          position: 'absolute',
          width: 150,
          left: 0,
        }}
      >
        <ul>
          <>
            <li>Opciones </li>
            <li>Nuevo </li>
            <li>Nueva Ventana </li>
            <li>Abrir </li>
          </>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
