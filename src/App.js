import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js'; // Importamos componente Header

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Lista de proyectos de GitHub!</h1>
      </div>
    </div>
  );
};
 
ReactDOM.render(<App />, document.getElementById('root'));