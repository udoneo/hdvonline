import React, { Component } from 'react';
import '../App.css';
var Dropzone = require("dropzone");

class SecondForm extends Component {
  render() {
    return (
        <div className="login-page">

    <div className="form">
      <form className="start-form">
        <h2 className='box-title' >Experiencia Laboral</h2>
        <input type="text" placeholder="Empresa/Organizacion"/>
        <input type="text" placeholder="Cargo desempeñado"/>
        <input type="text" placeholder="Functiones del cargo"/>
        <input type="text" placeholder="Fecha Inicion de labor"/>
        <input type="text" placeholder="Fecha finalizacion de labor"/>
        <button type='button' className='add-xp'>Añadir Experiencia</button>


        <button type='button'>Terminar!</button>
        <p className="message">No estas registrado? <a href="#">Crea un cuenta</a></p>
      </form>

    </div>
  </div>
    );
  }
}


module.exports = SecondForm;
