'use strict';

angular.module('cariocaApp')
    .factory('restService', ['$resource', '$q', function ($resource, $q) {

        var baseUrl = 'http://192.168.0.2:2403';

        var Jugador = $resource(baseUrl + '/jugadores/:id', {id: '@id'}, {
            update: {method: 'PUT', params: {id: '@id'}}
        });

        var Juego = $resource(baseUrl + '/juegos/:id', {id: '@id'}, {
            update: {method: 'PUT', params: {id: '@id'}}
        });

        return {
            guardarJuego: function (datos) {
                var juego = new Juego(datos);
                return juego.$save();
            },
            getJugadores: function () {
                var delay = $q.defer();
                Jugador.query(function (jugadores) {
                    delay.resolve(jugadores);
                }, function () {
                    delay.reject('Unable to fetch players');
                });
                return delay.promise;
            },
            guardarJugador: function (name) {
                console.log('Guardar "' + name + '"');
            },
            eliminarJugador: function (name) {
                console.log('Eliminar "' + name + '"');
            },
            cambiarNombreJugador: function (oldName, newName) {
                console.log('Cambiar nombre "' + oldName + '" a "' + newName + '"');
            },
            getResultados: function () {
                var delay = $q.defer();
                Juego.query(function (juegos) {
                    delay.resolve(juegos);
                }, function () {
                    delay.reject('Unable to fetch results');
                });
                return delay.promise;
            },
            getUltimoJuego: function () {
                var delay = $q.defer();
                Juego.query({'$sort': {'fecha': -1}, '$limit': 1},
                    function (juegos) {
                        if(juegos.length > 0)
                            delay.resolve(juegos[0]);
                        else
                            delay.reject('Unable to fetch last game');
                    }, function () {
                        delay.reject('Unable to fetch last game');
                    });
                return delay.promise;
            }
        };
    }]);
