import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PagesDefault';

function CadastroCategoria() {
    return (
    <PageDefault>
      <h1>Cadastro de Categoria.</h1>

      <form>

        <label>
          Nome da Categoria:  
          <input
            type="text"
          />
        </label>

        <button>
            Cadastrar
        </button>

      </form>

      <Link to="/">
          <h2>Ir para home</h2>
      </Link>
    </PageDefault>
    )
  }

export default CadastroCategoria;