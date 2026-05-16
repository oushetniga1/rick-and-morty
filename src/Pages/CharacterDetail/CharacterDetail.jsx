import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/api';
import './CharacterDetail.css';

function CharacterDetail() {

    const { id } = useParams();

    const [character, setCharacter] = useState(null);

    useEffect(() => {

        const [error, setError] = useState(false);

        const fetchCharacter = async () => {

            try {

                const data =
                    await getCharacterById(id);

                setCharacter(data);

            } catch {

                setError(true);
            }
        };
        fetchCharacter();

    }, [id]);

    if (!character) {

        return <h1>Cargando...</h1>;
    }
    if (error) {

        return (

            <div className="error-page">

                <h1>
                    Error al cargar personajes
                </h1>

            </div>
        );
    }

    return (

        <div className="detail-container">

            <img
                src={character.image}
                alt={character.name}
            />

            <div className="card-content">
                <h1>{character.name}</h1>

                <p className="status">

                    <span
                        className={`status-dot ${character.status}`}
                    >

                    </span>

                    {character.status}

                </p>

                <p>
                    <strong>Especie:</strong> {character.species}
                </p>

                <p>
                    <strong>Género:</strong> {character.gender}
                </p>
            </div>

        </div>
    );
}

export default CharacterDetail;