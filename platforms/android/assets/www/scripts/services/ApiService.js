//Servicio que se conecta a la Api
angular.module("Drungap").service("ApiService", ["$http" , "settings",function ($http, settings) {

    this.consultaApi = function (servicio) {
        return $http.get(settings.rutaApi
            + settings.apiVersion + "/"
            + servicio
            + "?api_key=" + settings.apiKey
            + "&language=" + settings.language)
    };
}]);