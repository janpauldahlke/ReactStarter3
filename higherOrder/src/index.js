import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

//import HOC and use it as Wrapped Component in Route path component
import requireAUTH from './components/require_auth';
import App from './components/app';
import Ressources from './components/ressources';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory }>
      <Route path ="/" component={App} >
        <Route path="/Ressources" component={requireAUTH(Ressources)} ></Route>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'));
