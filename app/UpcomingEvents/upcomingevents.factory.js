(function() {
    'use strict';
    angular
        .module('app')
        .factory('EventsFactory', EventsFactory);
    EventsFactory.$inject = ['$http', '$q', 'wineServer'];
    /* @ngInject */
    function EventsFactory($http, $q, wineServer) {
        var service = {
            getAllEvents: getAllEvents, 
            addToEvent: addToEvent,
            getEventsByProfile: getEventsByProfile
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

        function addToEvent(eventId, userId, userName, userNumber, token) {
            var defer = $q.defer();
            var bodyData = {
                "attendeeid": userId, 
                "attendeename": userName, 
                "attendeenumber": userNumber,
                "checkin": false
            }
            console.log(bodyData);
            $http({
                method: 'PUT',
                url: wineServer + 'events/' + eventId,
                data: bodyData,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(function(response){
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

        function getEventsByProfile(profileId, token) {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: wineServer + 'events/profile/' + profileId,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
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