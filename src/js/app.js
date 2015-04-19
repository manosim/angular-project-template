var app = angular.module('projectName', [
    'ui.router',
    'controllers',
    'directives',
    'services',
]);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider

    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: "HomeCtrl"
    })

    .state('about', {
      url: "/about",
      templateUrl: "templates/about.html",
      controller: "AboutCtrl"
    });

});
