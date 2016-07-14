import React, { Component } from 'react'
import Thumbnail from 'components/thumbnail'

class Info extends Component {
	constructor() {
		super()
		console.log(this);
		this.state = {
			katieText: '',
			kevinText: ''
		}
	}

	handleClick() {
		this.setState({
			katieText: 'I clicked the Katie!'
		})
	}

	handleClick2() {
		this.setState({
			kevinText: 'I clicked the Kevin!'
		})
	}

	handleClick3() {
		this.setState({
			katieText: '',
			kevinText: ''
		})
	}

	render() { return (
		<div>
			<h1>Information</h1>
			<p>
				We specialize in creating environments of fun, laughter, smiles, and most importantly, a good serving of exercise. Our business centers around Pulse Radar, a healthy interactive dance game for all ages. Ask us to attend your event and enjoy the innovation in entertainment all of your attendees will love.
			</p>
			<Thumbnail />
			<p>
				We have an award-winning setup customizable for your needs at a price you can handle. With the years of experience we have under our belt, there’s no service that can come close to what we offer. Look at our services for more in-depth information.
			</p>
			<ul>
				<li>Festivals & Fairs</li>
				<li>School Events</li>
				<li>Church Events</li>
				<li>Community Events</li>
				<li>Educational Consulting</li>
				<li>Birthday Parties</li>
				<li>Celebrations</li>
				<li>Team Building Exercises</li>
			</ul>
			<div>
				<img src="http://placehold.it/500x250" />
			</div>
			<p>
				We may also assist with school organizations centered around Pulse Radar to help kids stay fit and active and fight childhood obesity. We provide the materials and teach the lessons for those wanting an advanced workout.
			</p>
			<div>
				<img src="http://placehold.it/500x250" />
			</div>
			<button onClick={this.handleClick.bind(this)}>Katie</button>
			<p>{this.state.katieText}</p>
			<button onClick={this.handleClick2.bind(this)}>Kevin</button>
			<p>{this.state.kevinText}</p>
			<button onClick={this.handleClick3.bind(this)}>NO!</button>
		</div>
	)}
}

module.exports = Info
