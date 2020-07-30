import React from 'react';
import Ibisflix from '../../assets/img/Ibisflix.png';
import './Menu.css';
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
               <img className="Logo" src={Ibisflix} alt="IbisFlix logo"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )

}

export default Menu;