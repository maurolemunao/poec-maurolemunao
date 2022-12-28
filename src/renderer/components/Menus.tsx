/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from 'react';
import MenuModel from 'renderer/models/MenuModels';
import Menu from './Menu';

export default function Menus() {
  const menus: MenuModel[] = [
    {
      label: 'Archivos',
      options: ['Nuevo', 'Abrir', 'Guardar', 'Guardar como', 'Salir'],
    },
    { label: 'Edicion', options: ['Deshacer', 'Copiar', 'Pegar', 'Eliminar'] },
    { label: 'Formato', options: ['Ajuste de linea', 'Fuente'] },
    { label: 'Ver', options: ['Zoom', 'Barra de estado'] },
    { label: 'Ayuda', options: ['Ver la ayuda', 'Enviar comentarios'] },
  ];

  const [show, setShow] = useState<number>();
  return (
    <div className="title-bar">
      <div
        className="close-menu"
        onClick={() => setShow(undefined)}
        style={{ display: show !== undefined ? 'block' : 'none' }}
      />
      {menus.map((menu, i) => (
        <Menu
          show={show === i}
          label={menu.label}
          options={menu.options}
          showMe={() => setShow(i)}
        />
      ))}
      <div
        style={{
          right: 0,
          padding: 8,
          position: 'relative',
          userSelect: 'none',
          flex: 0,
          marginLeft: 'auto',
          width: 'auto',
          textAlign: 'end',
        }}
      />
    </div>
  );
}
