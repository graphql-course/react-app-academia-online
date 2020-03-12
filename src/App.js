import React, { Component } from 'react';
import './App.css';
import Student from './queries/Students'
import Course from './queries/Courses'

class App extends Component {
  render() {
    return (
      <div>
        <p>Abrir la consola para ver los resultados de las consultas</p>
        <Student/>
        ----------
        <Course/>
      </div>
    );
  }
  
  
}

export default App;
