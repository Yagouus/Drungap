//Definimos modulos
angular.module("Drungap", ["ngRoute", "route-segment", "view-segment"]);

//Definimos secciones
angular.module("Drungap").config(["$routeSegmentProvider", "$routeProvider", function ($routeSegmentProvider, $routeProvider) {
    $routeSegmentProvider.when("/libros", "libros");


    //Ruta por defecto
    $routeProvider.otherwise("/libros");

    //Libros
    $routeSegmentProvider.segment("libros", {
        controller:"LibrosCtrl",
        templateUrl:"views/Libros.html"
    });
}]);
  
  