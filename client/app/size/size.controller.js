'use strict';

angular.module('modCabAppApp')
  .controller('SizeCtrl', function ($scope,choiceService, $location, climate) {
    
    var choice = climate

    $scope.choice = function(choice) {

    	choiceService.setSize(choice);
    	$location.path('/designs')
    }

    $scope.getChoice = function() {
    
    }

  });

