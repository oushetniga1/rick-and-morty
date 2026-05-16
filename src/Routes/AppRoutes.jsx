import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home/Home';

import Species from '../Pages/Species/Species';

import CharacterDetail from '../Pages/CharacterDetail/CharacterDetail';

import NotFound from '../Pages/NotFound/NotFound';

function AppRoutes() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/species/:name"
                element={<Species />}
            />

            <Route
                path="/character/:id"
                element={<CharacterDetail />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
}

export default AppRoutes;