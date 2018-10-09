import React from 'react';

import Loader from '../../components/Loader';
import { delay } from '../../helpers';

class AboutPage extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}

	componentDidMount() {
		delay(2000).then(() => this.setState({ loading: false }));
	}

	render() {
		const { loading } = this.state;

		if (loading) {
			return <Loader />;
		}

		return (
			<div className="about">
				<h1 className="about__title">SWAPI MOVIE LIST</h1>
				<p className="about__caption">Created by <a href="https://linkedin.com/in/rudyondolan">Rudy Ondolan</a></p>
			</div>
		);
	}

}

export default AboutPage;