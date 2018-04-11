import React from 'react';
import ReactDOM from 'react-dom';

import Styles from './styles/styles.less';

function Application(props) {
    return (
        <div>
            <p>Lorem ipsum dorem sit amet</p>
        </div>
    );
}

ReactDOM.render(
    <Application />,
    document.getElementById('root')
);