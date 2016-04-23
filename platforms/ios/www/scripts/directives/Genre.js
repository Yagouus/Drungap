angular.module("Drungap").directive("genre", ["$compile", function ($compile) {
    return {
        restrict: "AE",
        scope:{
            collection:"="
        },
        link: function(scope, elemento){
            scope.searchGenre = function () {
            };
            var view="";

            for(var f = 0, F = scope.collection.length; f < F; f++){
                view += "<a href='' ng-click='searchGenre()' class='chip hoverable'>" + scope.collection[f] + "</a> ";
                
            }
            var element = angular.element(view);
            var compiled = $compile(element)(scope);
            elemento.replaceWith(compiled);
        }
    }
}]);
