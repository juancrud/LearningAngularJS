(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  $scope.counter = 0;

  //Call $digest manually => no AngularJS detection if an error is thrown
  // $scope.upCounter = function () {
  //   setTimeout(function(){
  //     $scope.counter++;
  //     console.log("Counter incremented");
  //     $scope.$digest();
  //   }, 2000);
  // };

  //Call $apply => now AngularJS will detect if an error is thrown
  // $scope.upCounter = function () {
  //   setTimeout(function(){
  //     $scope.$apply(function(){
  //       $scope.counter++;
  //       console.log("Counter incremented");
  //     });
  //   }, 2000);
  // };

  //This is using native AngularJS
  $scope.upCounter = function () {
    $timeout(function(){
      $scope.counter++;
      console.log("Counter incremented");
    }, 2000);
  };
}

})();
