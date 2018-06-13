(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.name = "Juan";

  $scope.countOnce = function(){
    $scope.onceCounter = 1;
  };

  $scope.showNumberOfWatchers = function () {
    console.log('Number of watchers: ' + $scope.$$watchersCount);
  };

  $scope.upCounter = function () {
    $scope.counter++;
  };

  $scope.$watch(function(){
    console.log("Digest Loop Fired!");
  });

  // $scope.$watch('onceCounter', function(newValue, oldValue){
  //   console.log("OnceCounter Old Value: " + oldValue);
  //   console.log("OnceCounter New Value: " + newValue);
  // });
  //
  // $scope.$watch('counter', function(newValue, oldValue){
  //   console.log("Counter Old Value: " + oldValue);
  //   console.log("Counter New Value: " + newValue);
  // });
}

})();
