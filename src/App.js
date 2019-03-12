import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="layer1">
            <div>
              André Luiz Barquet Moreira
            </div>
            <section>
              Desenvolvedor e Web Designer
            </section>
            <Link to="/curriculum"><button>Entrar</button></Link>
          </div>
          <div className="layer2"/>
        </header>
      </div>
    );
  }
}

export default App;
