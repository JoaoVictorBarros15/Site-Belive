import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";
function Nav() {
    return(
        <div id="cabeçalho">
            <header className="header">
                <div className="logo">
                    <h1><Link to="/Site-Belive">Belive Arquitetura</Link></h1>
                </div>
                <div className="nav">
                    <ul>
                        <li><Link to="/about">Sobre</Link></li> {/* Link para a página "Sobre" */}
                        <li><a href="#Blog">Blog</a></li>
                        <li><a href="https://linkme.bio/believe.arquitetura" target="_blank"
                         rel="noopener noreferrer" >Contato</a></li>
                    </ul>
                </div>
            </header>

            <div className="background">
                {/* Conteúdo da página inicial */}
            </div>
        </div>
    );
}

export default Nav;