import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search'; // Importamos componente Search
import { BrowserRouter, Route } from 'react-router-dom';
import ListProjects from './ListProjects';
import Details from './Details';

const App = () => {

  const handlePressProject = (history, username, id, name) => {
    if(username && id){
      history.push(`/${username}/project/${id}/${name}`);
    }
  }

  const goBack = (history, username) => {
    if(username)
      history.push(`/${username}/projects`);
    else
      history.push("/");
  }

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
          render={({ match, history }) => (
          <ListProjects
            match = {match}
            history = {history}
            handlePressProject = {handlePressProject}
            goBack = {goBack}
          />
        )}/>
      <Route 
      exact
      path="/:username/project/:id/:name"
      render={({ match, history }) => (
        <Details
          match = {match}
          history = {history}
          goBack = {goBack}
        />
      )}/>
    </div>
      
    </BrowserRouter>
  );
};
 
ReactDOM.render(<App />, document.getElementById('root'));