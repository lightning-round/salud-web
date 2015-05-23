'use strict';

/**
 * @ngdoc function
 * @name saludWebApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the saludWebApp
 */

var profile='var/profile.json';
var measures='var/measures.json';
angular.module('saludWebApp')
  .controller('ProfileCtrl', function ($scope,$http) {
    $http.get(profile).
        success(function(data){
        $scope.last_name=data.last_name;
        $scope.first_name=data.first_name;
        $scope.birthday=data.birthday;
        $scope.gender=data.gender;
        });
    $http.get(measures).
        success(function(data){  
            $scope.measures=data.measures;  
        });
});
