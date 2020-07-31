import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PagesDefault';

function CadastroVideo() {
    return (
    <PageDefault>
      <h1>Cadastro de vídeo.</h1>

      <Link to="/cadastrocategoria">
          <h2>Cadastro de categoria.</h2>
      </Link>
    </PageDefault>
    )
  }

export default CadastroVideo;