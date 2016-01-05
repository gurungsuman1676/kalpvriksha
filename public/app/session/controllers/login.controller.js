;
(function () {
  "use strict";

  var LoginController = function ($scope, $state) {

    var userCredentials = {username:'admin', password:'admin'}
    $scope.loginUser = function(){
      if($scope.username == userCredentials.username && $scope.password == userCredentials.password){
        $state.go('dashboard');
      }
      else{
        console.log(123);
        $scope.errors = true;
        $scope.errorMessage = 'Incorrect Login credentials';
      }
    }

    $scope.$watch('username', function(val){
      console.log(val)
      if(val){
        $scope.errors = false;
      }
    })
  };
  LoginController.$inject = ['$scope', '$state'];

  angular
  .module('Kalpvriksha')
  .controller('LoginController', LoginController);

})();
