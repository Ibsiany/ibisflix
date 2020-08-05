import React from 'react';
import { Link } from 'react-router-dom';
import Ibisflix from '../../assets/img/Ibisflix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Ibisflix} alt="IbisFlix logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="cadastrovideo">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
{/*import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Ibisflix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastrovideo">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;*/}