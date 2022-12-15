import Menu from './Menu';

export default function Menus() {
  return (
    <div
      style={{
        margin: 0,
        width: '100%',
        display: 'flex',
      }}
    >
      <Menu menudesplegable="Archivo" />
      <Menu menudesplegable="Edicion" />
      <Menu menudesplegable="Formato" />
      <Menu menudesplegable="Ver" />
      <Menu menudesplegable="Ayuda" />
    </div>
  );
}
