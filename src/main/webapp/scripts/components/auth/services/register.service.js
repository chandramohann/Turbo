'use strict';

angular.module('turboApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


