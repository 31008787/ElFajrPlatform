import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux'
import createElFajrStore from './ReduxStuff/Store/elFajrStore';
import ElFadjrApp from './Components/Containers/ElFadjrApp';
import MyApp from './myApp';
const myStore = createElFajrStore()


ReactDOM.render(<Provider store={myStore}>
    {/* <ElFadjrApp></ElFadjrApp> */}
    <MyApp/>
</Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
