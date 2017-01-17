import React, { Component } from 'react';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
import '../App.css';

class SecondForm extends Component {
  render() {
    return (
        <div className="login-page">

    <div className="form">
      <form className="start-form">

        <h2 className='box-title' >Cuentanos sobre ti</h2>
        <textarea rows="8"placeholder="Perfil profesional" className={'input-perfil'}></textarea>

        <Link to='step-three'>
        <button type='button'>Siguiente!</button>
        </Link>

        <p className="message">No estas registrado? <a href="#">Crea un cuenta</a></p>
      </form>
    </div>
  </div>
    );
  }
}

module.exports = SecondForm;
