const BASE_URL =
    "https://rickandmortyapi.com/api";

export const getCharacters =
async (page = 1) => {

    const response = await fetch(
        `${BASE_URL}/character?page=${page}`
    );

    if (!response.ok) {

        throw new Error(
            "Error al obtener personajes"
        );
    }

    return await response.json();
};

export const getCharacterById =
async (id) => {

    const response = await fetch(
        `${BASE_URL}/character/${id}`
    );

    if (!response.ok) {

        throw new Error(
            "Personaje no encontrado"
        );
    }

    return await response.json();
};

export const getCharactersBySpecies =
async (species) => {

    const response = await fetch(
        `${BASE_URL}/character/?species=${species}`
    );

    if (!response.ok) {

        throw new Error(
            "Error al filtrar personajes"
        );
    }

    const data = await response.json();

    return data.results;
};

export const searchCharacters =
async (name) => {

    const response = await fetch(
        `${BASE_URL}/character/?name=${name}`
    );

    if (!response.ok) {

        throw new Error(
            "No encontrado"
        );
    }

    const data = await response.json();

    return data.results;
};