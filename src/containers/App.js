import React, { Component } from 'react';
// components
import NavbarInstance from '../components/NavbarInstance';
import Poll from '../components/poll';
import Vote from '../components/vote';
import FooterInstance from '../components/FooterInstance';
import NoMatch from '../components/NoMatch';
import VoteApp from '../components/VoteApp';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default class App extends Component {
    render() 
    {
        const layout = (
        <div>
            <NavbarInstance/>
            <Router history={browserHistory}>
                <Route path='/' component={VoteApp}>
                  <IndexRoute component={Poll}/>
                  <Route path='vote/:id' component={Vote}/>
                <Route path='*' component={NoMatch}/>
                </Route>
                
            </Router>
           <FooterInstance/>
       </div>
        );
        return layout;
    }
}