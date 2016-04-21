//Definimos modulos
angular.module("Drungap", ["ngRoute", "route-segment", "view-segment"]);

//Definimos secciones
angular.module("Drungap").config(["$routeSegmentProvider", "$routeProvider", function ($routeSegmentProvider, $routeProvider) {
    $routeSegmentProvider.when("/libros", "libros");
    $routeSegmentProvider.when("/libros/detalles", "libros.detalles");

    //Ruta por defecto
    $routeProvider.otherwise("/libros");

    //Libros
    $routeSegmentProvider.segment("libros", {
        controller:"LibrosCtrl",
        templateUrl:"views/Libros.html",
        resolve: {
            Libros: ["ApiService", function (ApiService) {
                return ApiService.consultaApi("movie/upcoming");
            }]
        }
    });

    //Detalle de un libro
    $routeSegmentProvider.within("libros").segment("detalles", {
        controller:"LibrosDetallesCtrl",
        templateUrl:"views/LibrosDetalles.html",
        resolve: {
            Pelicula: ["ApiService", "$routeParams", function (ApiService, $routeParams) {
                return ApiService.consultaApi("movie/" + $routeParams.idPelicula);
            }]
        }
    });
}]);
  
  