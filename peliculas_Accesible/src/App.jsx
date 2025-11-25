import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from './NavBar';
import Inicio from './pages/Inicio';
import Peliculas from './pages/peliculas';
import Interpretes from './pages/interpretes';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/interpretes" element={<Interpretes />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;

