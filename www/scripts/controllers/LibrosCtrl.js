angular.module("Drungap").controller("LibrosCtrl", ["$scope", "$location","Libros" ,function ($scope, $location, Libros){
    $scope.libros = Libros.data.results;

    $scope.verDetalle = function (id) {
        $location.path("/libros/detalles").search({
            idPelicula: id
        });
    };

}]);