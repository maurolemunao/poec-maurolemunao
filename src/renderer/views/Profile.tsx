/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import '../App.css';

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState(false);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [edad, setEdad] = useState(0);
  const [telefono, setTelefono] = useState(0);
  const [dni, setDni] = useState(0);
  const [cosaFavorita, setCosaFavorita] = useState('');
  const [img, setImg] = useState('');

  function save() {
    console.log('Nombre: ', nombre);
    setEditando(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setNombre('Mauro Franco Gabriel');
      setApellido('Lemunao');
      setFechaNacimiento(new Date('2000-09-18').toISOString());
      setEdad(22);
      setTelefono(2944696594);
      setDni(42806251);
      setCosaFavorita('La scaloneta');
      setImg(
        'https://p4.wallpaperbetter.com/wallpaper/452/344/1000/artistic-pixel-art-wallpaper-preview.jpg'
      );
    }, 3000);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Mi Perfil</h1>
      <img
        style={{
          borderRadius: 75,
        }}
        src={img || null}
        alt=""
        width={200}
        height={200}
        className={loading ? 'skeleton' : ''}
      />{' '}
      <div className="datos-container">
        {editando ? (
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            placeholder="Nombres"
          />
        ) : (
          <span className={loading ? 'skeleton' : ''}>{nombre}</span>
        )}
      </div>
      <div className="datos-container">
        {editando ? (
          <input
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            type="text"
            placeholder="Apellidos"
          />
        ) : (
          <span className={loading ? 'skeleton' : ''}>{apellido}</span>
        )}
      </div>
      <div className="datos-container">
        {editando ? (
          <input
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            type="date"
            placeholder="Fecha de Nacimiento"
          />
        ) : (
          <span className={loading ? 'skeleton' : ''}>
            {new Date(fechaNacimiento).toLocaleDateString()}
          </span>
        )}
      </div>
      <div className="datos-container">
        {editando ? (
          <input
            value={edad}
            onChange={(e) => setEdad(e.target.valueAsNumber)}
            type="number"
            placeholder="Edad"
          />
        ) : (
          <span className={loading ? 'skeleton' : ''}>{edad}</span>
        )}
      </div>
      <div className="datos-container">
        {editando ? (
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.valueAsNumber)}
            type="number"
            placeholder="Telefono"
          />
        ) : (
          <span className={loading ? 'skeleton' : ''}>{telefono}</span>
        )}
      </div>
      <div className="datos-container">
        {editando ? (
          <input
            value={dni}
            onChange={(e) => setDni(e.target.valueAsNumber)}
            type="number"
            placeholder="Dni"
          />
        ) : (
          <span className={loading ? 'skeleton' : ''}>{dni}</span>
        )}
      </div>
      <div className="datos-container">
        {editando ? (
          <input
            value={cosaFavorita}
            onChange={(e) => setCosaFavorita(e.target.value)}
            type="text"
            placeholder="Cosa Favorita"
          />
        ) : (
          <span className={loading ? 'skeleton' : ''}>{cosaFavorita}</span>
        )}{' '}
      </div>
      <div className="button-profile">
        <button
          className="button-edit"
          onClick={() => (editando ? save() : setEditando(true))}
        >
          {editando ? 'Guardar' : 'Editar'}
        </button>
      </div>
    </div>
  );
}
