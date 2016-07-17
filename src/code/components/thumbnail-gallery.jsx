import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Thumbnail from 'components/thumbnail'

// Utilities
import { stylesHelper } from 'utilities/styles-helper'

const styles = [
	require('styl/thumbnail-gallery')
]

class ThumbnailGallery extends Component {
	// static propTypes = {};

	renderThumbnail(thumbnail, index) { return (
		<Thumbnail key={index} src={thumbnail.src} caption={thumbnail.caption} />
	)}

	renderThumbnails() { return (
		this.props.thumbnails.map(this.renderThumbnail)
	)}

	render() { debugger; return (
		<div className="thumbnail-gallery">
			{this.props.thumbnails && this.renderThumbnails()}
		</div>
	)}
}

export default stylesHelper(ThumbnailGallery, styles);
