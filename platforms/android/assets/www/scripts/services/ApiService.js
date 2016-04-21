//Servicio que se conecta a la Api
angular.module("Drungap").service("ApiService", ["$http" , "settings",function ($http, settings) {

    this.consultaApi = function () {
        return $http.get(settings.rutaApi)
    };
}]);