import React from 'react';

import './Footer.css';

const Footer = () => {

    return (

        <footer className="footer">

            <div className="footer-content">

                <h2>
                    Rick And Morty API
                </h2>

                <p>
                    Proyecto realizado con React y la API de Rick and Morty
                </p>

                <div className="footer-info">

                    <span>
                        Hecho por Daniel Felipe Restrepo
                    </span>

                    <span>
                        Ingeniería de Sistemas • Programación Web ®
                    </span>

                </div>

            </div>

        </footer>
    );
}

export default Footer;