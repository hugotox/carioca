'use strict';

angular.module('cariocaApp')
    .factory('dataAccess', ['dataAccessSettings', 'restService', 'localStorageService',
        function (dataAccessSettings, restService, localStorageService) {

            if (dataAccessSettings.type === 'rest') {
                return restService;
            } else if (dataAccessSettings.type === 'localStorage') {
                return localStorageService;
            } else {
                throw dataAccessSettings.type + ' not implemented!';
            }

        }]);
