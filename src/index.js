import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import Game from './game';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));


serviceWorker.unregister();
