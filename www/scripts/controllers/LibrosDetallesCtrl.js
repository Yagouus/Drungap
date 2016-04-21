angular.module("Drungap").controller("LibrosDetallesCtrl", ["$scope", "$location", "Libro", "ApiService", function ($scope, $location, Libro, ApiService){
    $scope.Libro = Libro.data;

    $scope.rutaImagen = function (imagen) {
        return ApiService.obtenerRutaImagen(150, imagen)
    };
}]);