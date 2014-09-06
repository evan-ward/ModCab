'use strict';

angular.module('modCabAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stay-or-go', {
        url: '/stay-or-go',
        templateUrl: 'app/stay-or-go/stay-or-go.html',
        controller: 'StayOrGoCtrl'
      });
  });