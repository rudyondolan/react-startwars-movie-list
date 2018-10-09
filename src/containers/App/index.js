import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../../components/Header';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import InfoPage from '../InfoPage';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/films/:id" component={InfoPage} />
        <Route path="/about" component={AboutPage} />
      </React.Fragment>
    </Router>
  );
}

export default App;