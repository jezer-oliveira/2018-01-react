import React, { Component } from 'react';
import MenuPagina from './menu/MenuPagina';
import LoginPagina from './login/LoginMaterialPagina';
import API from './API';
class App extends Component {
  render() {
    
    if (this.state.usuario)
      return <MenuPagina />;
    else
      return <LoginPagina onLogin={
        (usuarioRetorno) =>
          this.setState({ usuario: usuarioRetorno })} />;
  }

  constructor() {
    super();
    this.state = {
      usuario: null
    };
  }


}

export default App;