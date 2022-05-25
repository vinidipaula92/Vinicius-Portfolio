// import Projects from "./components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rbx/index.css';
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Projetos from './pages/Projetos';
import Sobre from "./pages/Sobre.js";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/projetos' component={Projetos} />
        <Route path='/contato' component={Contato} />
      </Switch>
      </div>
      );
  }
}

export default App;