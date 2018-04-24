import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import {TROCA_NOME, trocanome} from './actionsApp'
const App = (props)=> {
    const {nomeDoUsuario, trocanome} =  props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p onClick={()=>trocanome(nomeDoUsuario)} className="App-intro">
          {nomeDoUsuario}
        </p>
      </div>
    );
  }


const mapStateToProps = (state) => ({
  nomeDoUsuario: state.usuario.nome
})
const mapDispatchToProps = {
  trocanome
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
