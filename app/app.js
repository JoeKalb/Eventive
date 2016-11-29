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