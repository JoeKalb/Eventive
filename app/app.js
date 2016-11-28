(function() {
    'use strict';
    angular
        .module('app', [
            'ui-router'
        ])

        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        	$urlRouterProvider.outherwise('/home');

        	$stateProvider
        		.state('home', {
        			url: '/home',
    				templateUrl: 'app/HomePage/home.html',
    				controller: 'homeController',
    				controllerAs: 'vm'
        		})

        		.state('login', {
					url: '/home',
    				templateUrl: 'app/Login/login.html',
    				controller: 'loginController',
    				controllerAs: 'vm'
        		})

        		.state('profile', {
        			url: '/home',
    				templateUrl: 'app/Profile/profile.html',
    				controller: 'profileController',
    				controllerAs: 'vm'
        		})

        		.state('register', {
        			url: '/home',
    				templateUrl: 'app/Register/register.html',
    				controller: 'registerController',
    				controllerAs: 'vm'
        		})

        }]);

})();