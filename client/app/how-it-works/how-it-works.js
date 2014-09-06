'use strict';

angular.module('modCabAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('how-it-works', {
        url: '/how-it-works',
        templateUrl: 'app/how-it-works/how-it-works.html',
        controller: 'HowItWorksCtrl'
      });
  });