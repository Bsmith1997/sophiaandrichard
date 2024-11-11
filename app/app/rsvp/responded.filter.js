/**
 * Created by Kelvin on 8/2/2016.
 */
(function() {
    'use strict';

    angular.module('sophiaAndRichard')
        .filter('respondedFilter', respondedFilter);

    function respondedFilter() {
        return function(obj) {
            delete obj.responded;
            return obj;
        }
    }
})();