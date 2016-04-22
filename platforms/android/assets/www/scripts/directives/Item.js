angular.module("Drungap").directive("item", ["ApiService", function (ApiService) {

    return{
        restrict:"AE",
        replace: true,
        templateUrl:"views/item.html",
        scope:{
            datos: "=",
            alSeleccionar: "&"
        },
        link: function (scope) {

            //Returns image
            scope.rutaImagen = function (imagen) {
                return ApiService.obtenerRutaImagen(45, imagen)
            };

            scope.clickEnMedia = function (id) {
                scope.alSeleccionar({
                    mediaId: id
                })
            }

        }
    };
}]);