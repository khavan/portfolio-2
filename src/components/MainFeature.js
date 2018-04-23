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
					alt: '#553a41',
					href: '',
					title: 'John Doe Construction',
					desc: 'Lorem ispum dolor it amet, consectetur adipiscing elit.'
				},
				{
					src: 'url(https://placeimg.com/1000/1000/nature)',
					alt: '#32908f',
					href: '',
					title: 'The Nature Resort',
					desc: 'Lorem ispum dolor it amet, consectetur adipiscing elit.'
				},	
				{
					src: 'url(https://placeimg.com/1000/1000/tech)',
					alt: '#26c485',
					href: '',
					title: 'Innovative Solutions',
					desc: 'Lorem ispum dolor it amet, consectetur adipiscing elit.'
				}
			],
			canShift: true,
			start: 0,
			x: 0
		}

		this.pollMouse = this.pollMouse.bind(this);

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

			var inlStyles = {
				backgroundImage: imageObj.src,
				backgroundColor: imageObj.alt
			};

			slides.push(
				<div key={i} style={ inlStyles } className={ Styles.slide } >
					<div className={ Styles.slideText }>
						<h1>{ imageObj.title }</h1>
						<p>{ imageObj.desc }</p>
						<button style={ imageObj.href ? '' : { display: 'none' } }
						onClick={ () => { window.location.href = (imageObj.href || '#') } }>view</button>
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

	pollMouse(e) {
		this.setState({x: e.pageX});
	}

	handleMouseUp(e) {
		var direction = -(this.state.x - this.state.start);
		var center = (window.innerWidth / 2);
		var u = center + 50;
		var l = center - 50;
		if (direction > u || direction < l) {
			if (direction > 0) {
				this.handleControllerClick(1);
			} else {
				this.handleControllerClick(-1);
			}
		}	
		this.setState({x: 0});
	}

	render() {
		var transformXAmount = (100 * this.state.currentImage);
		var styles = {
			'transform': `translateX(-${transformXAmount}%)`
		}
		
		return (
			<div id={ Styles.mainFeature } className={ this.props.visible ? Styles.visible : '' } >
				<div className={ Styles.slideshow }>
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
					<div className={ Styles.slideContainer } style={ styles } onMouseDown={ (e) => { document.addEventListener('mousemove', this.pollMouse); this.setState({start: e.pageX}) }} onMouseUp={ () => { document.removeEventListener('mousemove', this.pollMouse); this.handleMouseUp(); } }> 
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
