import React from 'react';
import ReactDOM from 'react-dom';
import './font-awesome/css/font-awesome.min.css'
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import ContactFormContainer from './components/ContactFormContainer'
import {createStore, applyMiddleware, compose} from 'redux' ;
import reducer from './reducers' ;
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import ContactFormEnquiries from './components/ContactFormEnquiries'


const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
const store = createStore(

    reducer,
    composeEnhancers(
        applyMiddleware( thunk)
    )
)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/admin" component={ContactFormEnquiries} />
          <Route exact path="/" component={ContactFormContainer} />
      
          
        </Switch>
      </div>

    </BrowserRouter>
  </Provider>

    , document.getElementById('root'));
registerServiceWorker();
