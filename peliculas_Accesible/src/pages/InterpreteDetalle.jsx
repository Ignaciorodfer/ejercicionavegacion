import { useParams, useNavigate } from 'react-router-dom';
import peliculas from '../data/listapeliculas';
import Contenedor from '../components/Contenedor';

function InterpreteDetalle() {
  const { nombre } = useParams();
  const navigate = useNavigate();
  let actor = null;
  let peliculaDeActor = null;

  for (const pelicula of peliculas) {
    const foundActor = pelicula.actores.find(a => a.nombre === nombre);
    if (foundActor) {
      actor = foundActor;
      peliculaDeActor = pelicula;
      break;
    }
  }

  if (!actor) {
    return <div>Intérprete no encontrado</div>;
  }

  return (
    <Contenedor titulo={actor.nombre}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={actor.imagen} alt={`Foto de ${actor.nombre}`} className="w-full h-auto rounded-lg shadow-lg" />
        <div>
          <p className="mt-4"><strong>Biografía:</strong> {actor.biografia}</p>
          <h3 className="text-xl font-bold mt-4">Películas:</h3>
          <ul>
            <li>{peliculaDeActor.nombre}</li>
          </ul>
          <button onClick={() => navigate(-1)} className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Volver
          </button>
        </div>
      </div>
    </Contenedor>
  );
}

export default InterpreteDetalle;
