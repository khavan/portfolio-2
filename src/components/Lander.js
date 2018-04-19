import React, { Component } from 'react';

import Styles from '../styles/styles.less';

class Lander extends React.Component {

	render() {
		return (
			<div id={ Styles.lander } className={this.props.visible ? '' : Styles.exit}>
				<div className={ Styles.textContainer }>
					<h2>front en<span className={ Styles.lastLetter }>d</span><br />develope<span className={ Styles.lastLetter }>r</span></h2>
					<h1>khavan<br />guneratne</h1>
					<h2>a regula<span className={ Styles.lastLetter }>r</span><br />code frea<span className={ Styles.lastLetter }>k</span></h2>
					<button onClick={() => { this.props.handleClick() }}>enter</button>
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
