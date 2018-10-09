import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { injectIntl, intlShape } from 'react-intl';

import { getCustomPath } from '../../helpers';

function List(props) {
	const { intl, data, onClick } = props;

	return (
		<div className="episode-list">
      <ul className="episode-list__content">
        {data.map((d) =>
        	<li key={uuid()} onClick={(e) => onClick(e, getCustomPath(d.url, 4, 5))} className="episode-list__item list-item">
	          <div className="list-item__left">{d.title}</div>
	          <div className="list-item__right">{intl.formatDate(d.created, {
							    year: 'numeric',
							    month: 'long',
							    day: 'numeric',
							})}
						</div>	
	        </li>
        )}
      </ul>
    </div>
	);
}

List.defaultProps = {
	data: [
		{
			title: 'Title',
			created: '1/1/2018',
		},
	],
};

List.propTypes = {
	data: PropTypes.array,
	intl: intlShape,
};

export default injectIntl(List);