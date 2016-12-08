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
            getEventsByProfile: getEventsByProfile,
            removeEventFromUser: removeEventFromUser,
            getEventsCompany: getEventsCompany,
            getCoordFromAddress: getCoordFromAddress,
            addEvent: addEvent
        };
        return service;
        
        ////////////////
        function getCoordFromAddress(address) {
            var defer = $q.defer();

            address = address.replace(" ", "+");
            $http({
                method: 'GET',
                url: 'https://maps.googleapis.com/maps/api/geocode/json?', 
                params: {
                    'address': address,
                    'key': 'AIzaSyCPOECad0LFOA3TApLW1vhYdpXLoncSHPI'
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

        function removeEventFromUser(eventId, profileId, token) {
            var defer = $q.defer();

            $http({
                method: 'PUT',
                url: wineServer + 'events/' + eventId + '/remove',
                data: {"attendeeid": profileId},
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

        function getEventsCompany(companyId, token) {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: wineServer + 'events/company/' + companyId,
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

        function addEvent(eventName, companyName, companyid, datetime, address, token, long, lat) {

            console.log(datetime);
            var defer = $q.defer();

            $http({
                method: 'POST',
                url: wineServer + 'events',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                data: {
                    'eventname': eventName,
                    'companyname': companyName,
                    'companyid': companyid,
                    'datetime': datetime,
                    'address': address,
                    'long': long,
                    'lat': lat
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