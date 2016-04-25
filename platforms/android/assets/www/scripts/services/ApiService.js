//Service that connects to API
angular.module("Drungap").service("ApiService", ["$http" , "settings",function ($http, settings) {

    //Query the API
    this.consultaApi = function (servicio) {
        return $http.get(settings.rutaApi + settings.version + servicio);
    };
}]);