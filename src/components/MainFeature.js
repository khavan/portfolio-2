import React, { Component } from 'react';
import Styles from '../styles/styles.less';

class MainFeature extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentImage: 0,
			images: [
				{
					src: '',
					href: '#',
					title: 'John Doe & Co.',
					desc: 'Lorem ispum dolor it amet, consectetur adipiscing elit.'
				}
			]
	
		}
	}

	slideClickHandler(url) {
		window.href = url;
	}

	renderSlides() {
		var slides = new Array();
		for (var i = 0; i < this.state.images.length; i++) {
			var imageObj = this.state.images[i];
			var inlStyles = {
				backgroundImage: `url(${imageObj.src})`,
			}
			slides.push(
				<div key={i} style={ inlStyles } className={ Styles.slide } onClick={ () => { slideClickHandler(imageObj.href); } }>
					<div className={ Styles.slideText }>
						<h1>{ imageObj.title }</h1>
						<p>{ imageObj.desc }</p>
					</div>
				</div>
			);
		}
		return slides;
	}

	render() {
		return (
			<div id={ Styles.mainFeature } className={ this.props.visible ? Styles.visible : '' }>
				<div className={ Styles.slideshow }>
					<div className={ Styles.slide }>
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
