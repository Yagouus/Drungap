angular.module("Drungap").controller("LibrosDetallesCtrl", ["$scope", "$location", "Libro", "ApiService", function ($scope, $location, Libro, ApiService){

    $scope.libro = Libro.data[0];

}]);