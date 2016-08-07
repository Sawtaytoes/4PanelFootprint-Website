import React, { Component } from 'react'
import { Link } from 'react-router'

// Components
import PageDescription from 'components/page-description'

// Utilities
import { stylesHelper } from 'utilities/styles-helper'

// Styles
const styles = [
	require('styl/contact')
]

class NoMatch extends Component {
	render() { return (
		<article>
			<section className="bubble">
				<PageDescription
					title="404"
					subtitle="You're Trying to Get Somewhere That Doesn't Exist"
				>
					<Link className="contact__field__input contact__send-button" to="/info" title="Go to landing page">Go Back</Link>
				</PageDescription>
			</section>
		</article>
	)}
}

module.exports = stylesHelper(NoMatch, styles)
