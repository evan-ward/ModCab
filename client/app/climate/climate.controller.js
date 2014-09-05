'use strict';

angular.module('modCabAppApp')
  .controller('ClimateCtrl', function ($scope, choiceService, $location) {
    
    $scope.choice = function(choice) {

    	choiceService.setClimate(choice);
    	console.log($location.path('/size/'+ choice))
    	$location.path('/size/'+ choice);
    }
  });
