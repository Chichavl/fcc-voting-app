import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';

// redux
import configureStore from './store/configureStore';

const store = configureStore();

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
    );

ReactDOM.render(
app,
    document.getElementById('content')
);

