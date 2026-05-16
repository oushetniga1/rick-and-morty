import { Link } from 'react-router-dom';

import './CharacterCard.css';

function CharacterCard({ character }) {

    return (

        <div className="card">

            <img
                src={character.image}
                alt={character.name}
            />

            <div className="card-content">

                <h2>{character.name}</h2>

                <p className="status">

                    <span
                        className={`status-dot ${character.status}`}
                    >

                    </span>

                    {character.status}

                </p>

                <p>
                    Especie: {character.species}
                </p>

                <p>
                    Género: {character.gender}
                </p>

                <Link to={`/character/${character.id}`}>

                    Ver detalle

                </Link>

            </div>

        </div>
    );
}

export default CharacterCard;