import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter> 
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastrovideo" component={CadastroVideo} />
      <Route path="/cadastrocategoria" component={CadastroCategoria} />
      <Route component={
        () => (
        <div>        
        <h1>Página 404</h1>
        </div>)}/>
    </Switch>
</BrowserRouter>,
  document.getElementById('root')
);