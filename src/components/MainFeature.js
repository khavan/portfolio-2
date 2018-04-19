import React, { Component } from 'react';
import Styles from '../styles/styles.less';

import Logo from '../images/logo.svg';

class MainFeature extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentImage: 0,
			images: [
				{
					src: 'url(https://placeimg.com/1000/1000/arch)',
					href: '#',
					title: 'John Doe & Co.',
					desc: 'Lorem ispum dolor it amet, consectetur adipiscing elit.'
				},
				{
					src: 'url(https://placeimg.com/1000/1000/nature)',
					href: '#',
					title: 'John Doe & Co.',
					desc: 'Lorem ispum dolor it amet, consectetur adipiscing elit.'
				},	
				{
					src: 'url(https://placeimg.com/1000/1000/nature)',
					href: '#',
					title: 'John Doe & Co.',
					desc: 'Lorem ispum dolor it amet, consectetur adipiscing elit.'
				}
			],
			canShift: true
	
		}
	}

	componentDidMount() {
		this.setState({interval: setInterval(() => {
			this.handleControllerClick(1, true);
		}, 10000)});
	}

	slideClickHandler(url) {
		window.location.href = url;
	}

	renderSlides() {
		var slides = new Array();
		for (var i = 0; i < this.state.images.length; i++) {
			var imageObj = this.state.images[i];

			var translateXAmount = (i - this.state.currentImage) * 100;
			var translateYAmount = i * -100;
			var inlStyles = {
				transform: `translate(${translateXAmount}%, ${translateYAmount}%)`,
				background: imageObj.src
			};
			slides.push(
				<div key={i} style={ inlStyles } className={ Styles.slide } >
					<div className={ Styles.slideText }>
						<h1>{ imageObj.title }</h1>
						<p>{ imageObj.desc }</p>
						<button onClick={ () => { window.location.href = imageObj.href } }>view</button>
					</div>
				</div>
			);
		}
		return slides;
	}

	renderDots() {
		var dots = new Array();
		for (var i = 0; i < this.state.images.length; i++) {
			dots.push(
				<div key={i} className={ Styles.dot + ' ' + ((i === this.state.currentImage) ? Styles.highlighted : '') }>
				</div>
			);
		}
		return dots;
	}

	handleControllerClick(n, isControl=false) {
		if (this.state.canShift) {
			this.setState({ canShift: false });
			if (!isControl) clearInterval(this.state.interval);

			var x = 0;
			if (this.state.currentImage + n < 0) {
				x = this.state.images.length - 1;
			} else {
				x = (this.state.currentImage + n) % this.state.images.length;
			}

			this.setState({
				currentImage: x, 
			});
				
			setTimeout(() => {
				this.setState({
					canShift: true
				});
			}, 1000);
		}

	}

	render() {
		return (
			<div id={ Styles.mainFeature } className={ this.props.visible ? Styles.visible : '' }>
				<div className={ Styles.slideshow } onClick={ () => this.handleControllerClick(1) }>
					<div id={ Styles.logo }>
						<object data={ Logo } className={ (this.props.visible ? Styles.logoShow : '') }/>
					</div>
					<div id={ Styles.controls }>
						<div className={ Styles.left + ' ' + (this.props.visible ? Styles.controllerShow : '') }
						onClick={ () => { this.handleControllerClick(-1) }}>
							<i className="fas fa-chevron-left"></i>
						</div>
						<div className={ Styles.right + ' ' + (this.props.visible ? Styles.controllerShow : '') }
						onClick={ () => { this.handleControllerClick(1) }}>
							<i className="fas fa-chevron-right"></i>
						</div>
					</div>
					<div className={ Styles.dotContainer } >
						{ this.renderDots() }
					</div>
					<div className={ Styles.slideContainer }>
						{ this.renderSlides() } 
					</div>
				</div>
			</div>
		);
	}
}

export {
	MainFeature,
};
