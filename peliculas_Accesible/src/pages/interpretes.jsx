import Contenedor from "../components/Contenedor";
import Interprete from "../components/Interprete";
import peliculas from "../data/listapeliculas";
import Navbar from "../components/Navbar";

function InterpretesPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Contenedor titulo="Intérpretes de películas destacadas">
        <p className="body-text">
          Listado de intérpretes disponibles:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
          {peliculas.map(pelicula =>
            pelicula.actores.map((actor, index) => (
              <Interprete
                key={index}
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={pelicula.nota === 10}
              >
                {actor.biografia}
              </Interprete>
            ))
          )}
        </div>
      </Contenedor>
    </>
  );
}

export default InterpretesPage;
