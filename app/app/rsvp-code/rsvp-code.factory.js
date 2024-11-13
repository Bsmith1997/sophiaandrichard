// /app/rsvp-code/rsvp-code.factory.js
(function() {
  'use strict';

  angular.module('sophiaAndRichard')
    .factory('RSVPFactory', RSVPFactory);

  RSVPFactory.$inject = ['FirestoreFactory'];

  function RSVPFactory(FirestoreFactory) {
      var factory = {};

      // The method that interacts with Firestore to fetch RSVP data
      factory.getData = function(rsvpCode) {
          var rsvpCollection = FirestoreFactory.collection('rsvps');
          return rsvpCollection.doc(rsvpCode).get();  // Fetch the document by RSVP code
      };

      return factory;
  }
})();
