import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './devTools';
import { getCountries } from './actions/actions-countries';

render(
    <Provider store={store}>
        <div>
            <h1>Initialize the project</h1>
            <DevTools />
        </div>    
    </Provider>,
     document.getElementById('root')
  
) 
store.dispatch(getCountries())





