'use strict';

angular.module('modCabAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('designs', {
        url: '/designs',
        templateUrl: 'app/designs/designs.html',
        controller: 'DesignsCtrl'
      });
  });