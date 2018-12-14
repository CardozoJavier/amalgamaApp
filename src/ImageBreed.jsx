import React, { Component } from 'react';

export default class ImageBreed extends Component{
	constructor(props){
		super(props);
	}

	render(){
		var { src } = this.props;
		return (
			<img src= {src && src} />
		)
	}
}