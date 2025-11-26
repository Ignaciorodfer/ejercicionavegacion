import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Inicio from './components/Inicio';
import Peliculas from './pages/peliculas';
import Interpretes from './pages/interpretes';
import Admin from './components/Admin';
import PeliculaDetalle from "./pages/PeliculaDetalle";
import InterpreteDetalle from "./pages/InterpreteDetalle";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/peliculas/:id" element={<PeliculaDetalle />} />
        <Route path="/interpretes" element={<Interpretes />} />
        <Route path="/interpretes/:nombre" element={<InterpreteDetalle />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
