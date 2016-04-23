//Definimos modulos
angular.module("Drungap", ["ngRoute", "route-segment", "view-segment"]);

//Definimos secciones
angular.module("Drungap").config(["$routeSegmentProvider", "$routeProvider", "$httpProvider", function ($routeSegmentProvider, $routeProvider, $httpProvider) {

    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeSegmentProvider.when("/libros/catalogo", "libros.catalogo");
    $routeSegmentProvider.when("/libros/detalles", "libros.detalles");

    //Ruta por defecto
    $routeProvider.otherwise("/libros/catalogo");

    //Libros
    $routeSegmentProvider.within("libros").segment("catalogo", {
        controller:"LibrosCtrl",
        templateUrl:"views/Libros.html",
        resolve: {
            Libros: ["ApiService", function (ApiService) {
                return ApiService.consultaApi("/books");
            }]
        }
    });

    //Detalle de un libro
    $routeSegmentProvider.within("libros").segment("detalles", {
        controller:"LibrosDetallesCtrl",
        templateUrl:"views/LibrosDetalles.html",
        resolve: {
            Libro: ["ApiService", "$routeParams", function (ApiService, $routeParams) {
                return ApiService.consultaApi("/books?title=" + $routeParams.idLibro);
            }]
        }
    });
}]);
  
  