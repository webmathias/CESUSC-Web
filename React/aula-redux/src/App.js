import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'jquery'
import 'popper.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'


import { connect } from 'react-redux'
import { TROCA_NOME, trocanome } from './actionsApp'
import WizardController from './WizardController'
const App = (props) => {
  const { nomeDoUsuario, trocanome } = props;
  return (
    <div className="App">
      <WizardController
        onSubmit={values => {
          console.log(values)
        
        alert(JSON.stringify(values))
        }
        } />
    </div>
  );
}


const mapStateToProps = (state) => ({
  nomeDoUsuario: state.usuario.nome
})
const mapDispatchToProps = {
  trocanome
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
