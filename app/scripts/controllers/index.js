'use strict';

angular.module('cariocaApp')
    .controller('IndexCtrl', ['$scope', '$location', 'listaJuegos',
        'dataAccess', '$modal',
        function ($scope, $location, listaJuegos, dataAccess, $modal) {
            $scope.location = $location;

            $scope.data = {};
            $scope.data.jugadores = [];

            // array de juegos ex: ['Un trio', 'Dos trios', ...]
            $scope.juegos = listaJuegos.juegos;

            $scope.nuevoJuego = function () {
                $scope.data.fecha = (new Date()).toISOString();
                for (var i = 0; i < $scope.data.jugadores.length; i++) {
                    $scope.data.jugadores[i].scores = ['', '', '', '', '', '', '', '', '', ''];
                }
            };

            $scope.agregarJugador = function (nombre) {
                var jugador = {
                    nombre: nombre,
                    scores: ['', '', '', '', '', '', '', '', '', '']
                };
                $scope.data.jugadores.push(jugador);
                $scope.nombre = "";
            };

            $scope.calcularTotal = function (jugador) {
                var suma = 0;
                for (var i = 0; i < jugador.scores.length; i++) {
                    if (!isNaN(parseInt(jugador.scores[i]))) {
                        suma += parseInt(jugador.scores[i]);
                    }
                }
                jugador.total = suma;
            };

            $scope.quitarJugador = function (jugador) {
                var index = $scope.data.jugadores.indexOf(jugador);
                $scope.data.jugadores.splice(index, 1);
            };

            $scope.guardar = function () {
                $scope.data.fecha = (new Date()).toISOString();
                var promise = dataAccess.guardarJuego($scope.data);
                promise.then(function (data) {
                    $scope.data = data;
                });
            };

            dataAccess.getJugadores().then(function (jugadores) {
                angular.forEach(jugadores, function (jugador) {
                    $scope.agregarJugador(jugador.nombre);
                });
            });

            $scope.resultados = function () {
                var modalInstance = $modal.open({
                    templateUrl: 'views/resultados.html',
                    controller: ResultadosCtrl,
                    size: 'lg',
                    resolve: {
                        resultados: function(){
                            return dataAccess.getResultados();
                        }
                    }
                });

            };

        }]);

var ResultadosCtrl = function ($scope, $modalInstance, resultados) {
    $scope.data = { resultados: resultados };
    $scope.ok = function () {
        $modalInstance.close();
    };
};
