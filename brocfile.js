const
	funnel = require('broccoli-funnel'),
	jade = require('broccoli-jade'),
	mason = require('broccoli-mason'),
	mergeTrees = require('broccoli-merge-trees'),
	stylus = require('broccoli-stylus')

const
	funnelTo = (tree, dest) => funnel(tree, { srcDir: '/', destDir: dest  }),
	filterByExt = (tree, ext) => funnel(tree, { include: [`**/*.${ext}`] })

module.exports = mergeTrees([
	// https://github.com/sindresorhus/broccoli-jade#a-note-about-include-paths
	funnel(
		jade(funnel('assets/view', { srcDir: '/', destDir: 'assets/view', exclude: ['lib.jade'] })),
		{ srcDir: 'assets/view', destDir: '/' }),
	stylus(filterByExt('assets', 'styl')),
	mason(filterByExt('assets', 'ms'), {
		forceNonLazyModule: true,
		includeAmdefine: false
	}),
	funnelTo('assets/image', 'image'),
	funnelTo('bower_components', 'lib')
])
