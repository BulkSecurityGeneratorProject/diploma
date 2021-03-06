(function() {
    'use strict';
    angular
        .module('diplomaApp')
        .factory('Code', Code);

    Code.$inject = ['$resource'];

    function Code ($resource) {
        var resourceUrl =  'api/codes/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
