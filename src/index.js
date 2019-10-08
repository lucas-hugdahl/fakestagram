import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import ReactDOM from 'react-dom';
import { getUsers } from './reducer/users/actions';
import { getImages } from './reducer/images/actions';
import { getQuotes } from './reducer/quotes/actions';

import * as serviceWorker from './serviceWorker';
import './styles/base/_.scss';

// Views
import Home from "./views/Home.js";

// Global (always on) 
import Nav from './components/global/Nav.js';
import './styles/components/global/Nav.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

let count = 15;
//Grab all of the data from multiple random data APIs
store.dispatch(getImages(count));
store.dispatch(getQuotes(count));
store.dispatch(getUsers(count));

// Router
const routing = (
  <Router>
    <Provider store={store}>
      <main>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
      </main>
    </Provider>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
