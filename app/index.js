/* index.js */
/* Entry file */

import React from 'react';
import { render } from 'react-dom';
import AppContainer from './AppContainer/index.js';

require("./style.scss");

render(<AppContainer />, document.getElementById('root'));


/************************************************
    * This is used to enable hot reload for the 
    * root of application and stop propagation
    * while reloading 
*************************************************/

if (module.hot) {
    module.hot.accept(() => {
        render(<AppContainer />, document.getElementById('root'));
    })
}