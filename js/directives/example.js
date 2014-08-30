var directives = angular.module('directives.exampleDirective', []);

directives.directive('pageTitle', function() {

    return {
      template: 'Page Title: {{ title }}'
    };

});