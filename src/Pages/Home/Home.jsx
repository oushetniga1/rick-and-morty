import { useEffect, useState } from 'react';

import CharacterCard from
'../../Componentes/CharacterCard/CharacterCard';

import {
    getCharacters,
    searchCharacters
}
from '../../services/api';

import './Home.css';

function Home() {

    const [characters, setCharacters] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState(false);

    const [page, setPage] =
        useState(1);

    const [totalPages, setTotalPages] =
        useState(1);

    const [search, setSearch] =
        useState('');

    useEffect(() => {

        const fetchCharacters = async () => {

            try {

                setLoading(true);

                const data =
                    await getCharacters(page);

                setCharacters(data.results);

                setTotalPages(data.info.pages);

            } catch {

                setError(true);

            } finally {

                setLoading(false);
            }
        };

        fetchCharacters();

    }, [page]);

    // ✅ Buscador
    const handleSearch = async (
        e
    ) => {

        const value = e.target.value;

        setSearch(value);

        if (value === '') {

            const data =
                await getCharacters(page);

            setCharacters(data.results);

            return;
        }

        try {

            const results =
                await searchCharacters(value);

            setCharacters(results);

        } catch {

            setCharacters([]);
        }
    };

    if (loading) {

        return <h1>Cargando...</h1>;
    }

    if (error) {

        return <h1>Error al cargar</h1>;
    }

    return (

        <>

            {/* ✅ Buscador */}
            <div className="search-container">

                <input
                    type="text"
                    placeholder="Buscar personaje..."
                    value={search}
                    onChange={handleSearch}
                />

            </div>

            {/* ✅ Cards */}
            <div className="container">

                {
                    characters.map((character) => (

                        <CharacterCard
                            key={character.id}
                            character={character}
                        />

                    ))
                }

            </div>

            {/* ✅ Paginación */}
            <div className="pagination">

                <button
                    disabled={page === 1}
                    onClick={() =>
                        setPage(page - 1)
                    }
                >

                    ← Anterior

                </button>

                <span>
                    Página {page} de {totalPages}
                </span>

                <button
                    disabled={
                        page === totalPages
                    }
                    onClick={() =>
                        setPage(page + 1)
                    }
                >

                    Siguiente →

                </button>

            </div>

        </>
    );
}

export default Home;