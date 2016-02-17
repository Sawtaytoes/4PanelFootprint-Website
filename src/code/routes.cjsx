`import { Master } from './layouts'`

redirectRoute = (route, nextState, replaceState) =>
	replaceState null, route

module.exports =
	component: Master
	path: '/'
	onEnter: (nextState, replaceState) =>
		if nextState.location.pathname == '/'
			replaceState null, '/info'
	childRoutes: [

		# Redirects
	# 	path: '/'
	# 	onEnter: redirectRoute.bind null, '/info'
	# ,

		# Routes
		path: 'info'
		getComponent: (location, cb) =>
			# require.ensure [], (require) =>
			cb null, require './views/info'
	,
	# 	path: 'contact'
	# 	getComponent: (location, cb) =>
	# 		# require.ensure [], (require) =>
	# 		cb null, require './views/contact'
	# ,
		path: '*'
		getComponent: (location, cb) =>
			# require.ensure [], (require) =>
			cb null, require './views/404'
	]
