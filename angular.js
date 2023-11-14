(function () {
'use strict';

angular.module('myfirstapp', [])

.controller('myfirstcontroler',function ($scope) {
$scope.name="hanouf";
$scope.sayHello= function () {
    return "Hello Coursera";
}
});

}) ();
