angular.module("Drungap").controller("LibrosCtrl", ["$scope", "$location","Libros", "ApiService" ,function ($scope, $location, Libros, ApiService){
    $scope.libros = Libros.data;

    $scope.verDetalle = function (id) {
        $location.path("/libros/detalles").search({
            idLibro: id
        });
    };
    
}]);