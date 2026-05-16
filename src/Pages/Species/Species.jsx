import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CharacterCard from '../../Componentes/CharacterCard/CharacterCard';

import {
    getCharactersBySpecies
} from '../../services/api';

function Species() {

    const { name } = useParams();

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const data =
                await getCharactersBySpecies(name);

            setCharacters(data);
        };

        fetchData();

    }, [name]);

    return (

        <div>

            <h1>
                Especie: {name}
            </h1>

            {
                characters.map((character) => (

                    <CharacterCard
                        key={character.id}
                        character={character}
                    />

                ))
            }

        </div>
    );
}

export default Species;