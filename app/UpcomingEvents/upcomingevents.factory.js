(function() {
    'use strict';
    angular
        .module('app')
        .factory('EventsFactory', EventsFactory);
    EventsFactory.$inject = ['$http', '$q', 'wineServer'];
    /* @ngInject */
    function EventsFactory($http, $q, wineServer) {
        var service = {
            getAllEvents: getAllEvents
        };
        return service;
        ////////////////
        function getAllEvents() {
        	var defer = $q.defer();

        	$http({
        		method: 'GET',
        		url: wineServer + 'events',
        		headers: {
        			'Content-Type': 'application/json'
        		}
        	}).then(function(response) {
        		if (typeof response.data === 'object'){
        			defer.resolve(response.data);
        		} else {
        			defer.reject(response);
        		}
        	}, 
        	function(error) {
        		defer.reject(error);
        	});

        	return defer.promise;
        }
    }
})();