import React from 'react';

import Table from '../../components/Table';
import Loader from '../../components/Loader';
import { swapi } from '../../helpers';

class InfoPage extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { data: null };
	}

	componentDidMount() {
		const { match: { params: { id } } } = this.props;
		swapi(`films/${id}`).then((data) => this.setState(() => ({
			data,
		})));
	}

	render() {
		const { data } = this.state;

		if (!data) {
			return <Loader />;
		}

		return <Table data={data} />;
	}
}

export default InfoPage;