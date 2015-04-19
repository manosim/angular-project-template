var app = angular.module('controllers.home', []);

app.controller("HomeCtrl", function($scope, $location) {

    console.log("Home Controller");
    $scope.title = "Homepage";

});