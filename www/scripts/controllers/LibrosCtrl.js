angular.module("Drungap").controller("LibrosCtrl", ["$scope", "$location","Libros", "ApiService" ,function ($scope, $location, Libros, ApiService){
    $scope.libros = Libros.data.results;

    $scope.verDetalle = function (id) {
        $location.path("/libros/detalles").search({
            idPelicula: id
        });
    };

    $scope.rutaImagen = function (imagen) {
        return ApiService.obtenerRutaImagen(45, imagen)
    };

}]);