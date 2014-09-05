'use strict';

angular.module('modCabAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('size', {
        url: '/size/{choice}',
        templateUrl: 'app/size/size.html',
        controller: 'SizeCtrl',
        resolve: {
        	climate: function(climateService) {
        		return	climateService.getChoice();

        	}
        }
      });
  });