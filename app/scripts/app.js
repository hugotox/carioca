'use strict';

angular.module('cariocaApp', ['ngResource', 'ngSanitize', 'ngRoute', 'ui.bootstrap'])

    // App configuration
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html'
            })
            .when('/resultados', {
                templateUrl: 'views/resultados.html',
                controller: 'ResultadosCtrl',
                resolve: {
                    resultados: ['dataAccess', function(dataAccess){
                        return dataAccess.getResultados();
                    }],
                    ultimoJuego: ['dataAccess', function(dataAccess){
                        return dataAccess.getUltimoJuego();
                    }]
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    })

    // Constante de lista de juegos
    .constant('listaJuegos', {
        juegos: [
            'Dos trios',
            'Un trio y una escala',
            'Dos escalas',
            'Tres trios',
            'Dos trios y una escala',
            'Dos escalas y un trio',
            'Tres escalas',
            'Cuatro trios',
            'Escala real sucia',
            'Escala real limpia'
        ]
    })

    // estrategia para guardar datos. Optiones: 'rest', 'localStorage'
    .constant('dataAccessSettings', {
        type: 'rest'
    });
