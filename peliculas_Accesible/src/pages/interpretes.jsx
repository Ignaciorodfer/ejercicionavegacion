import Contenedor from "../components/Contenedor";
import Listado from "../components/Listado";
import peliculas from "../data/listapeliculas";


function InterpretesPage() {
  const interpretes = peliculas.flatMap(pelicula => 
    pelicula.actores.map(actor => ({...actor, esNota10: pelicula.nota === 10}))
  );

  return (
    <>
     
      <Contenedor titulo="Intérpretes de películas destacadas">
        <p className="body-text">Listado de intérpretes disponibles:</p>
        <Listado tipo="interpretes" items={interpretes} />
      </Contenedor>
    </>
  );
}

export default InterpretesPage;
