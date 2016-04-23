angular.module("Drungap").controller("LibrosDetallesCtrl", ["$scope", "$location", "Libro", "ApiService", function ($scope, $location, Libro, ApiService){

    $scope.libro = Libro.data[0];

    $scope.rutaImagen = function (imagen) {
        return ApiService.obtenerRutaImagen(150, imagen)
    };
}]);