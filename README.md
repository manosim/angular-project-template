Angular Project Template [![Build Status](https://travis-ci.org/ekonstantinidis/angular-project-template.svg?branch=master)](https://travis-ci.org/ekonstantinidis/angular-project-template)
=======================

A **clean** Angular project template.

### Using

- Angular 1.3.7 ([More](http://www.angularjs.org/))
- Angular Route 1.3.7 ([More](http://www.angularjs.org/))
- UI Bootstrap 0.12.0 ([More](http://angular-ui.github.io/bootstrap))
- Boostrap 3.3.1 (LESS) ([More](http://www.getbootstrap.com/))
- Font Awesome 4.2.0 ([More](http://fontawesome.io/))


### Grunt

- grunt ([More](http://gruntjs.com/))
- grunt-contrib-watch ([More](https://github.com/gruntjs/grunt-contrib-watch))
- grunt-contrib-copy ([More](https://github.com/gruntjs/grunt-contrib-copy))
- grunt-contrib-less ([More](https://github.com/gruntjs/grunt-contrib-less))
- grunt-contrib-jshint ([More](https://github.com/gruntjs/grunt-contrib-jshint))
- grunt-contrib-connect ([More](https://github.com/gruntjs/grunt-contrib-connect))


### Also

- Responsive Navbar using UI Boostrap
- Active Link (in Header Controller, `HeaderCtrl`)

### Files Struture

    project-name/
    	-- build
    	-- src
	        -- css/
	        -- fonts/
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
	        -- lib/
            	-- angular/
            	-- bootstrap/
				-- ui-boostrap/
				-- font-awesome/
			-- templates
				about.html
				home.html
	        -- index.html
        .gitignore
        .travis.yml
        Gruntfile.js
        package.json
        README.md