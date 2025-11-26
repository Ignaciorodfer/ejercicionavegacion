import Contenedor from "../components/Contenedor";
import Listado from "../components/Listado";
import peliculas from "../data/listapeliculas";

function PeliculasPage() {
  return (
    <Contenedor titulo="Películas destacadas">
      <p className="body-text">Listado de películas disponibles:</p>
      <Listado tipo="peliculas" items={peliculas} />
    </Contenedor>
  );
}

export default PeliculasPage;
