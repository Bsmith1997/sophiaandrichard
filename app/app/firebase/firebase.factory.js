(function() {
    'use strict';

    angular
        .module('sophiaAndRichard')
        .factory('FirebaseFactory', FirebaseFactory);

    FirebaseFactory.$inject = ['$q'];

        // Initialize Firestore
        var db = firebase.firestore();

        // Public API here
        return {
            database: db
        };

        return factory;
    }
)();
