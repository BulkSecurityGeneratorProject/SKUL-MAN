(function() {
    'use strict';
    angular
        .module('skulmanApp')
        .factory('Trimestre', Trimestre);

    Trimestre.$inject = ['$resource', 'DateUtils'];

    function Trimestre ($resource, DateUtils) {
        var resourceUrl =  'api/trimestres/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.dateDeb = DateUtils.convertLocalDateFromServer(data.dateDeb);
                        data.dateFin = DateUtils.convertLocalDateFromServer(data.dateFin);
                    }
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.dateDeb = DateUtils.convertLocalDateToServer(data.dateDeb);
                    data.dateFin = DateUtils.convertLocalDateToServer(data.dateFin);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.dateDeb = DateUtils.convertLocalDateToServer(data.dateDeb);
                    data.dateFin = DateUtils.convertLocalDateToServer(data.dateFin);
                    return angular.toJson(data);
                }
            }
        });
    }
})();
