import React, { Component } from 'react';

import Styles from '../styles/styles.less';

class Lander extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			topText: 'front end<br />developer',
			bottomText: 'a regular<br />code freak'
		}
	}

	renderText(text) {
		var a = text.split('<br />');

		return <h2>{ a[0] }<br />{ a[1] }</h2>;
	}

	render() {
		return (
			<div id={ Styles.lander }>
				<div className={ Styles.textContainer }>
					{ this.renderText(this.state.topText) }
					<h1>khavan<br />guneratne</h1>
					{ this.renderText(this.state.bottomText) }
				</div>
				<div className={ Styles.downArrowContainer }>
					<div className={ Styles.downArrowWrapper }>
					<i className="fas fa-chevron-down"></i>
					</div>
				</div>
			</div>
		);
	}
}

export {
	Lander,
};
