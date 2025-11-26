import Pelicula from "./Pelicula";
import Interprete from "./Interprete";
import { useNavigate } from 'react-router-dom';

function Listado({ tipo, items }) {
  const navigate = useNavigate();

  const handlePeliculaClick = (id) => {
    navigate(`/peliculas/${id}`);
  };

  const handleInterpreteClick = (nombre) => {
    navigate(`/interpretes/${nombre}`);
  };

  const renderItem = (item, index) => {
    if (tipo === "peliculas") {
      return (
        <div key={item.id} onClick={() => handlePeliculaClick(item.id)}>
          <Pelicula
            nombre={item.nombre}
            clasificacion={item.clasificacion}
            cartelera={item.cartelera}
          />
        </div>
      );
    } else if (tipo === "interpretes") {
      return (
        <div key={index} onClick={() => handleInterpreteClick(item.nombre)}>
          <Interprete
            nombre={item.nombre}
            foto={item.imagen}
            esNota10={item.esNota10}
          >
            {item.biografia}
          </Interprete>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
      {items.map(renderItem)}
    </div>
  );
}

export default Listado;
