import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';

function Table(props) {
	const { data, intl } = props;

	return(
		<div className="table">
			<table className="table__content">
				<tbody className="table__body">
					<tr className="table__row">
						<td className="table__row-item">Title</td>
						<td className="table__row-item">{data.title}</td>
					</tr>
					<tr className="table__row">
						<td className="table__row-item">Episode</td>
						<td className="table__row-item">{data.episode_id}</td>
					</tr>
					<tr className="table__row">
						<td className="table__row-item">Director</td>
						<td className="table__row-item">{data.director}</td>
					</tr>
					<tr className="table__row">
						<td className="table__row-item">Producer</td>
						<td className="table__row-item">{data.producer}</td>
					</tr>
					<tr className="table__row">
						<td className="table__row-item">Created</td>
						<td className="table__row-item">{intl.formatDate(data.created, {
						    year: 'numeric',
						    month: 'long',
						    day: 'numeric',
						  })}
					  </td>
					</tr>
					<tr className="table__row">
						<td className="table__row-item">Release Date</td>
						<td className="table__row-item">{data.release_date}</td>
					</tr>
					<tr className="table__row">
						<td className="table__row-item">Description</td>
						<td className="table__row-item">{data.opening_crawl}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);	
}

Table.propTypes = {
	data: PropTypes.object,
	intl: intlShape,
};

export default injectIntl(Table);
