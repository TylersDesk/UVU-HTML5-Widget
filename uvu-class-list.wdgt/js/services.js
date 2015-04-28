angular.module('uvuCatalog.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('coursesServices', function($http) {
        return {
            courses: function() {
                console.log('in services');
                return $http.get('http://digitalmedia.herokuapp.com/api/v1/courses')
                    .then(function(result) {
                        return result.data;
                        console.log('in services');
                    });
            }
        }

    });
