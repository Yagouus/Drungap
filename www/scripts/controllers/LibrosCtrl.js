angular.module("Drungap").controller("LibrosCtrl", ["$scope", "ApiService" ,function ($scope, ApiService){

    ApiService
        .consultaApi()
        .then(
            function(resultado){
                $scope.peliculas = resultado;
            },
            function () {
                alert("Algo no ha ido bien.");
            }
        );

}]);