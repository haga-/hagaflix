import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './components/pages/Categoria';
import CadastroVideo from './components/pages/Video';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/cadastro/video" component={CadastroVideo}></Route>
      <Route path="/cadastro/categoria" component={CadastroCategoria}></Route>
      <Route component={Pagina404}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
