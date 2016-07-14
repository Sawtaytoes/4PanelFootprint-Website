import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Utilities
import { stylesHelper } from 'utilities/styles-helper'

const styles = [
	require('styl/thumbnail')
]

class Thumbnail extends Component {
	// static propTypes = {};

	renderImg() {
		let size = 250
		return <img src={this.props.src || `http://placehold.it/${size}x${size}`} />
	}

	renderCaption() { return (
		<figcaption>{this.props.caption}</figcaption>
	)}

	render() { return (
		<figure className="thumbnail">
			{this.renderImg()}
			{this.props.caption && this.renderCaption()}
		</figure>
	)}
}

export default stylesHelper(Thumbnail, styles);
