var myApp=angular.module("myApp",[]);
myApp.controller("myAppController",["$scope",function($scope){
    var data={
        plan0:"hello0-iqbal-ahmed",
        plan1:"hello1-iqbal-ahmed",
        plan2:"hello2-iqbal-ahmed",
        plan3:"hello3-iqbal-ahmed",
    }
    $scope.data=data;
}]);
myApp.filter('stripDashes',function(){
    return function (txt){
        return txt.split("-").join(" ");
    }
});
myApp.filter('toTitleCase',function(){
    return function (txt){
        return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();
    }
});