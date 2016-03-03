/**
 * Created by IQBAL-MEBELKART on 3/4/2016.
 */
var myApp=angular.module('myApp',[]);
myApp.controller("myAppController",["$scope",function($scope){
    var data={
        firstName:"Iqbal",
        lastName:"Ahmed"
    }
    $scope.data=data;
    $scope.showName=function(){
        data.firstName="dastan";
    }
}]);
myApp.directive('showName',function(){
    return {
        restrict:'AE',
        template:
        "<button ng-click='showName()' type='button'>"
        +"{{data.firstName}}</button>"
    }
});

myApp.directive('showName2',function(){
    return {
        restrict:'AE',
        template:
        "<button ng-click='showName2()' type='button'>"
        +"{{data.firstName}}</button>",
        link:function($scope,$element){
            $scope.showName2=function(){
                $scope.data.firstName="Iqbal";
            }
        }
    }
});