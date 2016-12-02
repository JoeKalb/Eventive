(function() {
    'use strict';

    angular
        .module('app')
        .controller('profileController', profileController);

    profileController.$inject = ['toastr', 'storageFactory'];
    
    /* @ngInject */
    function profileController(toastr, storageFactory) {
        var vm = this;
        vm.title = 'profileController';

        activate();

        ////////////////

        function activate() {
            vm.email = storageFactory.getLocalStorage('userInfo').email;
            vm.password = storageFactory.getLocalStorage('userInfo').password;
            vm.number = storageFactory.getLocalStorage('userInfo').number;
            vm.name = storageFactory.getLocalStorage('userInfo').name;
        }
    }
})();