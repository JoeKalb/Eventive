/*
Setting up the routes used for the front end of the application.
Includes the different modules and components needed for the front end
*/

(function() {
    'use strict';
    var app = angular
        .module('app', [
            'ui.router', 
            'toastr', 
            'LocalStorageModule', 
            'uiGmapgoogle-maps',
            'ui.bootstrap.datetimepicker',
            'ngFileUpload'
        ]);

        // has both the live and local server listed for easy changes when testing new features
        app.value ('wineServer', 'https://appventful.herokuapp.com/api/');
        //app.value ('wineServer', 'http://localhost:3000/api/');

        // configure the different states as well as adding the local storage
        app.config(['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider',  function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
        	$urlRouterProvider.otherwise('/home');

        	$stateProvider
        		.state('home', {
        			url: '/home',
    				templateUrl: 'app/HomePage/home.html',
    				controller: 'homeController',
    				controllerAs: 'vm',
        		})

                .state('aboutus', {
                    url: '/aboutus',
                    templateUrl: 'app/AboutUs/aboutus.html',
                    controller: 'aboutUsController',
                    controllerAs: 'vm'
                })

                .state('gallery', {
                    url: '/gallery',
                    templateUrl: 'app/Gallery/gallery.html',
                    controller: 'galleryController',
                    controllerAs: 'vm'
                })

                .state('upcomingevents', {
                    url: '/upcomingevents',
                    templateUrl: 'app/UpcomingEvents/upcomingevents.html',
                    controller: 'upcomingEventsController',
                    controllerAs: 'vm'
                })

                .state('login', {
                    url: '/login',
                    templateUrl: 'app/Authentication/login.html',
                    controller: 'loginController',
                    controllerAs: 'vm'
                })

        		.state('profile', {
        			url: '/profile',
    				templateUrl: 'app/Profile/profile.html',
    				controller: 'profileController',
    				controllerAs: 'vm'
        		})

                .state('organizer', {
                    url: '/organizer',
                    templateUrl: 'app/Profile/organizer.html',
                    controller: 'organizerController',
                    controllerAs: 'vm'
                })

        		.state('register', {
        			url: '/register',
    				templateUrl: 'app/Authentication/register.html',
    				controller: 'registerController',
    				controllerAs: 'vm'
        		})

        }]);

        // adding a google maps rapper
        app.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
            uiGmapGoogleMapApiProvider.configure({
                key: 'AIzaSyBmXju8CHIaQIDu3DJIbrfj2oknuJhnNT4'
            });
        }]);

})();