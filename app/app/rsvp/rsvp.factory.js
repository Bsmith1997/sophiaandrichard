(function(firebase) {
    'use strict';

    angular.module('sophiaAndRichard')
        .factory('RSVPFactory', RSVPFactory);

    function RSVPFactory($q, FirebaseFactory) {
        return {
            data: null,
            key: null,
            getData: getData,
            save: save
        };

        function getData(code) {
            var self = this;
            return $q(function(resolve, reject) {
                // Use Firestore instead of Realtime Database
                var ref = FirebaseFactory.firestore.collection('codes').doc(code);
                
                ref.get().then(function(doc) {
                    if (doc.exists) {
                        self.data = doc.data();
                        self.key = doc.id;
                        resolve(self);
                    } else {
                        reject(null); // Document not found
                    }
                }).catch(reject);
            });
        }

        function save(newData) {
            var self = this;
            newData.responded = true;
            return $q(function(resolve, reject) {
                // Use Firestore to save the data
                FirebaseFactory.firestore.collection('codes').doc(self.key)
                    .set(newData)
                    .then(resolve)
                    .catch(reject);
            });
        }
    }
})(firebase);