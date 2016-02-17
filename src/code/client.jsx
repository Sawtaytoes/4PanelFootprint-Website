import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Redirect, Link } from 'react-router'
import { Provider } from 'react-redux'

// import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
// injectTapEventPlugin()

// Polyfills
import './utilities/polyfills'

// Store and Routes
import { history, store } from './store'
import routes from './routes'

// Nav Items
import navItems from './content/nav-items'

// Router
render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>
, document.getElementById('root'))
