Angular Project Template [![Build Status](https://travis-ci.org/ekonstantinidis/angular-project-template.svg?branch=master)](https://travis-ci.org/ekonstantinidis/angular-project-template)
=======================

A **clean** Angular project template.


### Dependencies

- Angular 1.3.15 ([More](http://www.angularjs.org/))
- UI Router 0.2.13 ([More](http://www.angularjs.org/))
- Boostrap 3.3.4 (LESS) ([More](http://www.getbootstrap.com/))
- Font Awesome 4.3.0 ([More](http://fontawesome.io/))


### Install
To begin `cd` into the project directory and install the dependecies. Make sure your also have `grunt-cli`.

    npm install -g grunt-cli
    npm install


### Run
One of the dependecies is `grunt-contrib-connect`. It allows you to simply serve your project to your browser:

    grunt serve


### Tests
There is only a `jshint` test. Also there is a `.travis.yml` file if you want to run `jshint` with every commit. To run the test locally:

    npm test


### Grunt Plugins

- grunt ([More](http://gruntjs.com/))
- grunt-contrib-watch ([More](https://github.com/gruntjs/grunt-contrib-watch))
- grunt-contrib-copy ([More](https://github.com/gruntjs/grunt-contrib-copy))
- grunt-contrib-concat ([More](https://github.com/gruntjs/grunt-contrib-concat))
- grunt-contrib-less ([More](https://github.com/gruntjs/grunt-contrib-less))
- grunt-contrib-jshint ([More](https://github.com/gruntjs/grunt-contrib-jshint))
- grunt-contrib-connect ([More](https://github.com/gruntjs/grunt-contrib-connect))


### Files Struture

    project-name/
    	-- build
        -- node_modules/
    	-- src
	        -- images/
	        -- js/
	            -- apps/
	            -- controllers/
	                about.js
	                header.js
	                home.js
	            -- directives/
	                example.js
	            app.js
	            controllers.js
	            directives.js
            -- less/
            -- templates
                about.html
                home.html
            -- index.html
        .gitignore
        .travis.yml
        Gruntfile.js
        package.json
        README.md