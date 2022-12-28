import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import FotoFachera from '../../assets/icons/jony.jpg';
import './App.css';
import BotonReusable from './views/Home';
import Menus from './components/Menus';
import Profile from './views/Profile';
import TitleBar from './components/Titlebar';

export default function App() {
  return (
    <div>
      <TitleBar />
      <Menus />

      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
