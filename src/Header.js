//componente funcional
import React from 'react';

const backStyle = {
  color: 'white',
  padding: '3px',
  position: 'absolute',
  left: '30px',
  border: '#555'
};

const Header = ({ headerVal }) => {
  return (
    <div className="header">
      <button type="back" style={backStyle}>
        <span className="fa fa-arrow-left fa-3x" />
      </button>
      <p className="logo">{headerVal}</p>
    </div>
  );
};

export default Header;