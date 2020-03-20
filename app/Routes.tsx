import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import {Provider} from "mobx-react";

const ViewIndex = React.lazy(() =>
    import(/* webpackChunkName: "views" */ './views')
);
const ViewApp = React.lazy(() =>
    import(/* webpackChunkName: "views-app" */ './views/app')
);

export default function Routes() {


  const rootStore = {
    name: '워메 환장하겄네.'
  }

  return (
    <Provider rootStore={rootStore}>
      <App>
        <div className="h-100" id="fb-root">
            <Switch>
              <Route path={routes.COUNTER} component={CounterPage}/>
              <Route path={routes.HOME} component={HomePage}/>

              <Route
                path={routes.APP}
                render={props => <ViewApp {...props} />}
              />
              <Route
                path={routes.INDEX}
                exact
                render={props => <ViewIndex {...props} />}
              />
              <Redirect to="/error"/>
            </Switch>
        </div>
      </App>
    </Provider>
  );
}
