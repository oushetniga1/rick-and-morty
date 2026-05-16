import { BrowserRouter } from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';
import Footer from './Componentes/Footer/Footer';
import AppRoutes from './routes/AppRoutes';

import './App.css';

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <div className="hero">

        <h1>
          The Rick and Morty API
        </h1>

      </div>

      <AppRoutes />
       
      <Footer />
      
    </BrowserRouter>

  );
}

export default App;