import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; // Link,

import App from './containers/App';
// components
// import NavbarInstance from './components/NavbarInstance';
import Poll from './components/poll';
import Vote from './components/vote';
//import FooterInstance from './components/FooterInstance';
import NoMatch from './components/NoMatch';
// redux
import configureStore from './store/configureStore';

const store = configureStore();

const layout = (
    <Provider store={store}>
        {/* <NavbarInstance/> */}
        <Router history={browserHistory}>
            <Route path='/' component={App}>
              <IndexRoute component={Poll}/>
              <Route path='vote/:id' component={Vote}/>
            <Route path='*' component={NoMatch}/>
            </Route>
            
        </Router>
        {/* <FooterInstance/> */}
    </Provider>
    );

ReactDOM.render(
layout,
    document.getElementById('content')
);

