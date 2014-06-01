'use strict';

angular.module('cariocaApp')
    .factory('utils', function () {

        return {

            dateFromISO: function(isoStr) {
                var dateObj = new Date(isoStr );
                dateObj =  new Date(dateObj.getTime() + (dateObj.getTimezoneOffset() * 60000 ) );
                return dateObj;
            }

        };
    });
