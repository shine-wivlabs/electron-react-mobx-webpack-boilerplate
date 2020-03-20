import React, {Fragment, Suspense} from 'react';
import {render} from 'react-dom';
import {AppContainer as ReactHotAppContainer} from 'react-hot-loader';
import Root from './containers/Root';
import {configureStore, history} from './store/configureStore';
import './app.global.css';


const store = configureStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () =>
  render(
    <Suspense fallback={<div className="loading"/>}>
      <AppContainer>
        <Root store={store} history={history}/>
      </AppContainer>
    </Suspense>,
    document.getElementById('root')
  )
);
