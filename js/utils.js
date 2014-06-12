window.rubyChinaUtils ={
    range: function(){
        var tmpbox = [], args = Array.prototype.slice.call(arguments, 0);
        var startN = args[0], endN = args[1], step = args[2] && args[2] || 1;
        // var startN = arguments[0], endN = arguments[1], step = arguments[2]
        while(startN <= endN){
            if(startN % step == 0){
                tmpbox.push(startN);
            }
            startN += 1;
        }
        return tmpbox
    }
}

var rubyChinaUtils = angular.module("rubyChinaUtils", [])
rubyChinaUtils.run(['$rootScope', function($rootScope){
    angular.forEach(window.rubyChinaUtils, function(fn, key){
        $rootScope[key] = fn
    })
}]);