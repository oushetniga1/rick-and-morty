import { useEffect, useState } from 'react';

import { useParams }
from 'react-router-dom';

import { getCharacterById }
from '../../services/api';

import './CharacterDetail.css';

function CharacterDetail() {

    const { id } = useParams();

    const [character, setCharacter] =
        useState(null);

    useEffect(() => {

        const fetchCharacter = async () => {

            try {

                const data =
                    await getCharacterById(id);

                setCharacter(data);

            } catch (error) {

                console.log(error);
            }
        };

        fetchCharacter();

    }, [id]);

    if (!character) {

        return <h1>Cargando...</h1>;
    }

    return (

        <div className="detail-container">

            <img
                src={character.image}
                alt={character.name}
            />

            <div className="detail-info">

                <h1>
                    {character.name}
                </h1>

                <div className="status">

                    <span
                        className={`status-dot ${character.status}`}
                    ></span>

                    {character.status}

                </div>

                <p>
                    Especie:
                    {character.species}
                </p>

                <p>
                    Género:
                    {character.gender}
                </p>

                <p>
                    Origen:
                    {character.origin.name}
                </p>

                <p>
                    Ubicación:
                    {character.location.name}
                </p>

            </div>

        </div>
    );
}

export default CharacterDetail;