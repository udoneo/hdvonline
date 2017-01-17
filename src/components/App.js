import React, { Component } from 'react';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
import '../App.css';

class App extends Component {
  render() {
    return (
        <div className="login-page">
    <div className="form">
      <form className="start-form">
        <input type="text" placeholder="Nombre"/>
        <input type="text" placeholder="Apellidos"/>
        <input type="text" placeholder="Edad"/>
        <input type="text" placeholder="E-mail"/>
        {/*<input type="password" placeholder="Information"/> - For password*/}
        <Link to='step-two'>
        <button type='button'>Comenzar!</button>
        </Link>
        <p className="message">No estas registrado? <a href="#">Crea un cuenta</a></p>
      </form>
    </div>
  </div>
    );
  }
}

module.exports = App;
