import Contenedor from "../components/Contenedor";
import Interprete from "../components/Interprete";
import Pelicula from "../components/Pelicula"; 
import peliculas from "../data/listapeliculas";

function PeliculasPage() {
  return (
    <Contenedor titulo="Intérpretes de películas destacadas">
      <p className="body-text">
        Listado de intérpretes disponibles:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">

      

        {/* RENDER DE CADA PELÍCULA */}
        {peliculas.map((pelicula, index) => (
          <Pelicula
            key={index}
            nombre={pelicula.nombre}
            director={pelicula.director}
            clasificacion={pelicula.clasificacion}
            cartelera={pelicula.cartelera}
          >
            {pelicula.nombre}
          </Pelicula>
        ))}

      </div>
    </Contenedor>
  );
}

export default PeliculasPage;
