'use strict';

angular.module('modCabAppApp')
  .controller('StayOrGoCtrl', function ($scope, choiceService, $location) {
    
    $scope.choice = function(choice) {
		choiceService.setStayGo(choice);
    	// console.log($location.path('/size/'+ choice))
    	$location.path('/climate');
    }
  });
