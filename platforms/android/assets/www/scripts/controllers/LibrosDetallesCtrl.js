angular.module("Drungap").controller("LibrosDetallesCtrl", ["$scope", "$location", "Libro", "ApiService", function ($scope, $location, Libro, ApiService){

    //Send to scope
    $scope.libro = Libro.data[0];

}]);