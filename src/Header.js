//componente funcional
import React from 'react';
import PropTypes from 'prop-types';


const Header = ({ headerVal, props, visible }) => {
  return (
    <div className="header">
      <button type="back" style={{visibility: (visible) ? 'true' : 'false', color: 'white', padding: '3px', position: 'absolute', left: '30px', border: '#555'}} onClick={props}>
        <span className="fa fa-arrow-left fa-3x" />
      </button>
      <p className="logo">{headerVal}</p>
    </div>
  );
};

Header.propTypes = {
  headerVal: PropTypes.string,
  props: PropTypes.func,
  visible: PropTypes.bool
}

export default Header;