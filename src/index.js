import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import './styles/main.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<IntlProvider locale="en">
		<App />
	</IntlProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
