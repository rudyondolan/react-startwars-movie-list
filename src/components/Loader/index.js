import React from 'react';
// import PropTypes from 'prop-types';

import icon from './icon.svg';

function Loader() {
	return (
      <div className="loader">
        <div className="loader__content">
          <img src={icon} className="loader__icon" alt="icon" />
        </div>
      </div>
	);
}

Loader.defaultProps = {};

Loader.propTypes = {};

export default Loader;