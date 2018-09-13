import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import BoxCon from "./container/box-container";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));
class App extends Component{
    render(){
        return(
            <BoxCon/>
        );
    }
}

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
