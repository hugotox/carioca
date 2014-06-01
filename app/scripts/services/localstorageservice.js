'use strict';

angular.module('cariocaApp')
    .factory('localStorageService', function () {
        return {
            guardarJuego: function (datos) {
                console.log('Guardar: ');
                console.log(datos)
            },
            getJugadores: function () {
                return ['Hugo', 'Vero'];
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
                console.log('Obteniendo resultados...');
            },
            getUltimoJuego: function(){

            }
        };
    });
