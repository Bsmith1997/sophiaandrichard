(function() {
    'use strict';
  
    angular.module('sophiaAndRichard')
      .controller('RSVPCodeCtrl', RSVPCodeCtrl);
  
    RSVPCodeCtrl.$inject = ['RSVPFactory', '$state', 'FirestoreFactory'];
  
    function RSVPCodeCtrl(RSVPFactory, $state, FirestoreFactory) {
      var vm = this;
  
      vm.form = {};
      vm.formModel = {
        code: ''
      };
      vm.submit = submit;
      vm.isBusy = false;
      vm.invalidCode = null;
      vm.codeWatcher = codeWatcher;
  
      function codeWatcher(code) {
        if (vm.invalidCode) {
          if (code !== vm.invalidCode) {
            vm.invalidCode = null;
          }
        }
      }
  
      function submit(formModel) {
        vm.isBusy = true;
  
        // Using Firestore to check if RSVP code exists
        var rsvpCollection = FirestoreFactory.collection('rsvps');
  
        rsvpCollection.doc(formModel.code).get()
          .then(function(doc) {
            if (doc.exists) {
              $state.go('rsvp', { code: formModel.code });
            } else {
              vm.invalidCode = formModel.code; // Code not found
            }
          })
          .catch(function(error) {
            console.error("Error fetching RSVP code: ", error);
            vm.invalidCode = formModel.code;
          })
          .finally(function() {
            vm.isBusy = false;
          });
      }
    }
  })();
  