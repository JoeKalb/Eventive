(function() {
    'use strict';
    var app = angular
        .module('app', [
            'ui.router', 'toastr', 'LocalStorageModule', 'uiGmapgoogle-maps'
        ]);

        app.value ('wineServer', 'http://localhost:3000/api/');

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

})();