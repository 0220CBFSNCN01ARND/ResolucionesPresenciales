import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Persona from './Components/persona';

function App() {
  return (
    <div className="App">
      <Persona nombre="pepe lepu" edad="12" />
    </div>
  );
}

//Forma para crear componentes con react stateless
// function App() {
//   return React.createElement('div', {},
//     React.createElement('h1', {}, 'hola Edu'));
// }

//Forma para crear componentes con react statefull
// class App extends Component {
//   render() {
//     return React.createElement('div', {}, React.createElement('h1', {}, 'hola Edu'));
//   }
// }

export default App;
