var app = angular.module('projectName', [
    'ngRoute',
    'ui.bootstrap',
    'controllers',
    'directives',
]);

app.config(['$routeProvider',
    function($routeProvider) {

    $routeProvider
    .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl',
    })

    .otherwise({
        redirectTo: '/home'
    });

}]);

app.controller('HomeCtrl', function($scope) {
    $scope.title = "Homepage";
});

app.controller('AboutCtrl', function($scope) {
    $scope.title = "About";
});
