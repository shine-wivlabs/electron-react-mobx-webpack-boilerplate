import React, {Component, Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {inject, observer} from "mobx-react";

const BlankPage = React.lazy(() => import('./blank/blank'));

interface AppIndexProps {
  rootStore?: any,
  match?: any,
  location?: any
}

@inject('rootStore')
@observer
export default class AppIndex extends Component<AppIndexProps, {}> {

  render() {
    const {match} = this.props;
    return (
      <div>
        <div className="dashboard-wrapper" style={{fontSize: '.8rem'}}>
          <Suspense fallback={<div className="loading"/>}>
            <Switch>
              <Redirect exact from={`${match.url}/`} to={`${match.url}/blank`}/>
              <Route
                path={`${match.url}/blank`}
                render={props => <BlankPage/>}
              />
            </Switch>
          </Suspense>
        </div>
      </div>
    )
  }
}
