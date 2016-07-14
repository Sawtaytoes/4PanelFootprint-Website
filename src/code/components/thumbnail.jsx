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
		return <img src={`http://placehold.it/${size}x${size}`} />
	}

	render() { return (
		<figure className="thumbnail">
			{this.renderImg()}
			<figcaption>
				DOES THIS WORK?
			</figcaption>
		</figure>
	)}
}

export default stylesHelper(Thumbnail, styles);
