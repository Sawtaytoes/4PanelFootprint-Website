import React, { Component } from 'react'
import PageDescription from 'components/page-description'
import ThumbnailGallery from 'components/thumbnail-gallery'
import thumbnails from 'content/thumbnails'

class Pictures extends Component {
	render() { return (
		<div>
			<PageDescription title="Pictures" />
			<ThumbnailGallery {...thumbnails} />
		</div>
	)}
}

module.exports = Pictures
