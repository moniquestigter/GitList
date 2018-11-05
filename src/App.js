import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search'; // Importamos componente Search
import { BrowserRouter, Route } from 'react-router-dom';
import ListProjects from './ListProjects';
import Details from './Details';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Route 
      exact 
      path='/' 
      render={({ history }) => (
        <Search
          onSubmitUsername={(username) => {
            history.push(`/${username}/projects`)
          }}
        />
      )} />
      <Route 
      exact
      path="/:username/projects"
      component={ListProjects}
      />
      <Route 
      exact
      path="/:username/project/:id/:name"
      component={Details}
      />
    </div>
      
    </BrowserRouter>
  );
};
 
ReactDOM.render(<App />, document.getElementById('root'));