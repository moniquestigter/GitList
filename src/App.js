import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search'; // Importamos componente Search
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' render={({ history }) => (
        <Search
          onSubmitUsername={(username) => {
            history.push(`/${username}/projects`)
          }}
        />
      )} />
    </BrowserRouter>
  );
};
 
ReactDOM.render(<App />, document.getElementById('root'));