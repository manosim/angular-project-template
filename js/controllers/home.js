var app = angular.module('controllers.home', ['']);


app.controller("HomeCtrl", function($scope, $location) {

    $scope.title = "Homepage";

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

});