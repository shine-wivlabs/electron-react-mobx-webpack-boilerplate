import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import routes from '../constants/routes.json';

class Main extends Component {

  render() {
    return <Redirect to={routes.APP}/>;
  }
}

export default Main;
