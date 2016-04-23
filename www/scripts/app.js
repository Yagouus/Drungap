//Modules
angular.module("Drungap", ["ngRoute", "route-segment", "view-segment"]);

//Sections
angular.module("Drungap").config(["$routeSegmentProvider", "$routeProvider", "$httpProvider", function ($routeSegmentProvider, $routeProvider, $httpProvider) {

    //Routing
    $routeSegmentProvider.when("/libros/catalogo", "libros.catalogo");
    $routeSegmentProvider.when("/libros/detalles", "libros.detalles");

    //Default route
    $routeProvider.otherwise("/libros/catalogo");

    //Books catalog
    $routeSegmentProvider.within("libros").segment("catalogo", {
        controller:"LibrosCtrl",
        templateUrl:"views/Libros.html",
        resolve: {
            Libros: ["ApiService", function (ApiService) {
                return ApiService.consultaApi("/books");
            }]
        }
    });

    //Book detail
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
  
  