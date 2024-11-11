/**
 * Created by Kelvin on 8/20/2016.
 */
(function() {
    'use strict';

    angular.module('sophiaAndRichard')
        .controller('RoomBlockModalCtrl', RoomBlockModalCtrl);

    function RoomBlockModalCtrl($uibModalInstance) {
        var vm = this;

        vm.close = close;

        function close() {
            $uibModalInstance.close()
        }
    }
})();