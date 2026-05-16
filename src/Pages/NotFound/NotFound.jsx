import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {

    return (

        <div className="notfound-container">

            <h1>404</h1>

            <h2>
                Página no encontrada
            </h2>

            <p>
                La ruta que intentas visitar
                no existe o fue eliminada.
            </p>

            <Link
                to="/"
                className="btn-home"
            >

                Volver al inicio

            </Link>

        </div>
    );
}

export default NotFound;