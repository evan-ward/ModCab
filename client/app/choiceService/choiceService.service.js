'use strict';

angular.module('modCabAppApp')
  .service('choiceService', function ($location) {
    
    var choice = {};

    this.setClimate = function(climateType) {
    	choice.climate = climateType;
    	console.log (choice.climate)
    }

    this.getClimate = function() {
    	if (choice.climate) {
    		return choice.climate;
    		console.log (choice.climate);

    	} else {

    		var url = $location.path().split('/')
    		choice = url[url.length - 1];
    		return choice.climate;

    	} 
    	
    	
    }

  });


