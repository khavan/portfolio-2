import React from 'react';
import ReactDOM from 'react-dom';

import Styles from './styles/styles.less';

import { Lander } from './components/Lander.js';
import { MainFeature } from './components/MainFeature.js';

class Application extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			landerVisible: true,
		}

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('mousescroll', this.handleScroll);
		window.addEventListener('DOMMouseScroll', this.handleScroll);

		setTimeout(this.handleScroll, 4500);
	}

	handleScroll() {
		this.setState({
			landerVisible: false,
		});
	}
	
	render() {
		return (
			<div>
				<Lander visible={this.state.landerVisible} handleClick={ this.handleScroll }/>
				<MainFeature visible={!this.state.landerVisible} />
			</div>
		);
	}
}

ReactDOM.render(
	<Application />,
	document.getElementById('root')
);
