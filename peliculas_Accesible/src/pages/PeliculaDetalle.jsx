import { useParams, useNavigate } from 'react-router-dom';
import peliculas from '../data/listapeliculas';
import Contenedor from '../components/Contenedor';

function PeliculaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pelicula = peliculas.find(p => p.id === parseInt(id, 10));

  if (!pelicula) {
    return <div>Pelicula no encontrada</div>;
  }

  return (
    <Contenedor titulo={pelicula.nombre}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={pelicula.cartelera} alt={`Cartel de ${pelicula.nombre}`} className="w-full h-auto rounded-lg shadow-lg" />
        <div>
          <p><strong>Director:</strong> {pelicula.director}</p>
          <p><strong>Clasificación:</strong> {pelicula.clasificacion}</p>
          <p><strong>Recaudación:</strong> {pelicula.recaudacion}</p>
          <p className="mt-4"><strong>Resumen:</strong> {pelicula.resumen}</p>
          <h3 className="text-xl font-bold mt-4">Actores:</h3>
          <ul>
            {pelicula.actores.map(actor => <li key={actor.nombre}>{actor.nombre}</li>)}
          </ul>
          <button onClick={() => navigate(-1)} className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Volver
          </button>
        </div>
      </div>
    </Contenedor>
  );
}

export default PeliculaDetalle;
