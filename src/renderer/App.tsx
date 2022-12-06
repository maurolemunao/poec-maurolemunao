import FotoFachera from '../../assets/icons/jony.jpg';
import './App.css';
import BotonReusable from './components/Home';

export default function App() {
  const titulo = 'Botones con links';
  return (
    <div>
      <h1>{titulo}</h1>
      <img width="200" alt="icon" src={FotoFachera} />
      <BotonReusable
        link="https://github.com/maurolemunao/poec-maurolemunao"
        name="Github Repositorio"
      />
      <BotonReusable link="https://classroom.google.com/" name="Classroom" />
    </div>
  );
}
