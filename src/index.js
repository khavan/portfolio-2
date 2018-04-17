import React from 'react';
import ReactDOM from 'react-dom';

import Styles from './styles/styles.less';

import { Lander } from './components/Lander.js';

function Application(props) {
    return (
    	<Lander />
    );
}

ReactDOM.render(
    <Application />,
    document.getElementById('root')
);
