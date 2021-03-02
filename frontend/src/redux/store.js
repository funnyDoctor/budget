import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, combineReducers, applyMiddleware} from 'redux';


const reducer = combineReducers({});

const middleware = thunk;


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(middleware))
);

export default store;

