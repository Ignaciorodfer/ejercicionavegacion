import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="flex gap-4 p-4 bg-black text-white">
<Link to="/Inicio">Inicio</Link>
<Link to="/peliculas">Películas</Link>
<Link to="/interpretes">Intérpretes</Link>
<Link to="/admin">Admin</Link>
</nav>
);
}