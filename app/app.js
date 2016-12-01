(function() {
    'use strict';
    var app = angular
        .module('app', [
            'ui.router', 'toastr'
        ])

        app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        	$urlRouterProvider.otherwise('/home');

        	$stateProvider
        		.state('home', {
        			url: '/home',
    				templateUrl: 'app/HomePage/home.html',
    				controller: 'homeController',
    				controllerAs: 'vm'
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
                    templateUrl: 'app/Login/login.html',
                    controller: 'loginController',
                    controllerAs: 'vm'
                })

        		.state('profile', {
        			url: '/profile',
    				templateUrl: 'app/Profile/profile.html',
    				controller: 'profileController',
    				controllerAs: 'vm'
        		})

        		.state('register', {
        			url: '/register',
    				templateUrl: 'app/Register/register.html',
    				controller: 'registerController',
    				controllerAs: 'vm'
        		})

        }]);

})();