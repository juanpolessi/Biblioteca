import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Biblioteca from './Biblioteca';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Biblioteca />, document.getElementById('root'));
registerServiceWorker();
