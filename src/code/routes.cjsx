`import { Master } from './layouts'`

redirectRoute = (route, nextState, replaceState) =>
	replaceState null, route

module.exports =
	component: Master
	path: '/'
	onEnter: (nextState, replaceState) =>
		pageId = nextState.location.query.page_id
		catId = nextState.location.query.cat

		switch pageId
			when '36' then replaceState null, '/contact'
			when '340' then replaceState null, '/pulsen'
			when '691' then replaceState null, '/pulsen'
			when '29' then replaceState null, '/locations'
			when '310' then replaceState null, '/info'
			when '336' then replaceState null, '/info'

		switch catId
			when '7' then replaceState null, '/pictures'
			when '9' then replaceState null, '/pictures'

		if nextState.location.pathname == '/'
			replaceState null, '/info'

	childRoutes: [

		# Routes
		path: 'info'
		getComponent: (location, cb) =>
			# require.ensure [], (require) =>
			cb null, require './views/info'
	,
		path: 'contact'
		getComponent: (location, cb) =>
			# require.ensure [], (require) =>
			cb null, require './views/contact'
	,
	# 	path: 'pulsen'
	# 	getComponent: (location, cb) =>
	# 		# require.ensure [], (require) =>
	# 		cb null, require './views/pulsen'
	# ,
	# 	path: 'locations'
	# 	getComponent: (location, cb) =>
	# 		# require.ensure [], (require) =>
	# 		cb null, require './views/locations'
	# ,
	# 	path: 'pictures'
	# 	getComponent: (location, cb) =>
	# 		# require.ensure [], (require) =>
	# 		cb null, require './views/pictures'
	# ,
		path: '*'
		getComponent: (location, cb) =>
			# require.ensure [], (require) =>
			cb null, require './views/404'
	]
