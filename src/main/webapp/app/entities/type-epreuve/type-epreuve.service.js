(function() {
    'use strict';
    angular
        .module('skulmanApp')
        .factory('TypeEpreuve', TypeEpreuve);

    TypeEpreuve.$inject = ['$resource'];

    function TypeEpreuve ($resource) {
        var resourceUrl =  'api/type-epreuves/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
