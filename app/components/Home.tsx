import React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import routes from '../constants/routes.json';
import styles from './Home.css';

@inject('rootStore')
@observer
export default class Home extends React.Component<any, any> {
  render() {
    const {rootStore} = this.props;
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <h1>{rootStore.name}</h1>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
