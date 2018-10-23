import React from 'react';
import Header from './Header.js';

const Search = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <section className="search six offset-by-three columns">
          <form>
            <button type="submit">
              <span className="fa fa-check-circle fa-3x" />
            </button>
            <input
              className="u-full-width"
              type="text"
              name="username"
              placeholder="Enter Github Username"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Search;