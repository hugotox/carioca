'use strict';

angular.module('cariocaApp')
    .controller('ResultadosCtrl', ['$scope', 'resultados', 'ultimoJuego', function ($scope, resultados, ultimoJuego) {
        $scope.data = {
            resultados: resultados,
            ultimoJuego: ultimoJuego
        };
    }]);
