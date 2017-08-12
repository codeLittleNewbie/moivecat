/**
 * Created by W-Q on 2017/8/12.
 */
;(function (angular) {
    // 1.创建模块
    var module = angular.module("app",["ngRoute"])
        .controller("myController",["$scope",function ($scope) {

        }]);

    // 2.配置路由
    module.config(["$routeProvider","$locationProvider",function ($routeProvider,$locationProvider) {
        // 取消angular路由v1.6.xx 版本hash值需要带!问题
        $locationProvider.hashPrefix("");
        $routeProvider.when('/view1',{
            templateUrl : "view1/view1.html"
        }).when('/view2',{
            templateUrl : "view2/view2.html"
        }).otherwise({
            redirectTo : "/view/1"
        })
    }]);


})(angular);