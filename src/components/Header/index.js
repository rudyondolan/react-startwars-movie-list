import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { getPath } from '../../helpers';

function Header(props) {
	const { location: { pathname } } = props;
	const path = getPath(pathname);

	const styleActive = 'header__item_active';
	let classNameHome = 'header__item ';
	let classNameAbout = 'header__item ';

	if (path === 'about') {
		classNameAbout += styleActive;
	} else {
		classNameHome += styleActive;
	}

	return (
	  <nav className="header">
      <div className="header__menu">
        <Link to="/" className={classNameHome}>Starwars Movies</Link>
        <Link to="/about" className={classNameAbout}>About</Link>
      </div>
    </nav>
	);
}

Header.propTypes = {
	pathname: PropTypes.string,
};

export default withRouter(Header);
