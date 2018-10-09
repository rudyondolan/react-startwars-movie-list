import React, { PureComponent } from 'react';

import List from '../../components/List';
import Loader from '../../components/Loader';
import { swapi } from '../../helpers';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    swapi('films').then(data => this.setState(() => ({
      data: data.results,
    })));
  }

  handleClick(event, data) {
    event.preventDefault();
    const { history } = this.props;
    history.push(data);
  }

  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        { !data && <Loader /> }
        { data && <List data={data} onClick={this.handleClick} />}
      </React.Fragment>
    );
  }
}

export default HomePage;