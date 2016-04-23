angular.module("Drungap").controller("LibrosCtrl", ["$scope", "$location","Libros", "ApiService" ,function ($scope, $location, Libros, ApiService){

    //Send to scope
    $scope.libros = Libros.data;

    //Route to detail
    $scope.verDetalle = function (id) {
        $location.path("/libros/detalles").search({
            idLibro: id
        });
    };
    
}]);