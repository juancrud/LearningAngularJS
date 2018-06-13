(function () {
  'use strict';

  angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.input = "";
    $scope.message = "";
    $scope.color = "";

    $scope.check = function() {
      var items = $scope.input.split(',');
      items = items.filter(function(s){ return s.trim() != '' });
      
      if (items.length == 0){
        $scope.message = "Please enter data first";
        $scope.color = "red";
      }
      else if (items.length <= 3){
        $scope.message = "Enjoy!";
        $scope.color = "green";
      }
      else{
        $scope.message = "Too much!";
        $scope.color = "green";
      }
    };
  };
})();
