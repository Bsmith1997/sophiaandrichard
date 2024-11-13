/**
 * Created by Kelvin on 6/28/2016.
 */
(function() {
    'use strict';

    angular.module('sophiaAndRichard')
        .factory('FirebaseFactory', FirebaseFactory);

    function FirebaseFactory() {

        // Public API here
        return {
            database: firebase.database()
        };
    }
})();

