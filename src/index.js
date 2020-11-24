import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<<<<<<< HEAD
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
=======
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
>>>>>>> ac139425e9451ecd268720857dc21aaf1df0b886
);
