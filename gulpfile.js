var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

	component: {
		name: 'ReactFormElements',
		dependencies: [
			'classnames',
			'react',
			'react/addons'
		],
		lib: 'lib'
	},

	example: {
		src: 'example/src',
		dist: 'example/dist',
		files: [
			'index.html',
			'.gitignore'
		],
		scripts: [
			'example.js'
		],
		less: [
			'example.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);
