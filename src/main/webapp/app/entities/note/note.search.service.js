(function() {
    'use strict';

    angular
        .module('skulmanApp')
        .factory('NoteSearch', NoteSearch);

    NoteSearch.$inject = ['$resource'];

    function NoteSearch($resource) {
        var resourceUrl =  'api/_search/notes/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
