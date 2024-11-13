(function() {
    'use strict';

    angular.module('sophiaAndRichard')
        .factory('FirebaseFactory', FirebaseFactory);

    function FirebaseFactory() {

        // Initialize Firestore
        var db = firebase.firestore();

        // Public API here
        return {
            database: db
        };
    }
})();
