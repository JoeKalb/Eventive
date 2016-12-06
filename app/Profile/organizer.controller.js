(function() {
    'use strict';

    angular
        .module('app')
        .controller('organizerController', organizerController);

    organizerController.$inject = ['toastr', 'storageFactory', 'EventsFactory', '$state', '$stateParams'];
    
    /* @ngInject */
    function organizerController(toastr, storageFactory, EventsFactory, $state, $stateParams) {
        var vm = this;
        vm.title = 'organizerController';

        activate();

        ////////////////

        function activate() {
        	vm.email = storageFactory.getLocalStorage('userInfo').email;
            vm.password = storageFactory.getLocalStorage('userInfo').password;
            vm.number = storageFactory.getLocalStorage('userInfo').number;
            vm.name = storageFactory.getLocalStorage('userInfo').name;
            vm.id = storageFactory.getLocalStorage('userInfo')._id;
            vm.token = storageFactory.getLocalStorage('token');
            console.log(vm.email);
        }
    }
})();