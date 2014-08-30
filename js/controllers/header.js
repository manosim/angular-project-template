var app = angular.module('controllers.header', ['']);

app.controller("HeaderCtrl", function($scope, $location) {

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

});