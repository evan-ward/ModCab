'use strict';

angular.module('modCabAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('climate', {
        url: '/climate',
        templateUrl: 'app/climate/climate.html',
        controller: 'ClimateCtrl'
      });
  });