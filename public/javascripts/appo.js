var app = angular.module( 'FindMyPet', [] );

app.controller('Main', function ($scope, $http) {
  $scope.list = "todos";

  $http.get('http://woofind.herokuapp.com')
  	.then(function (response) {
  		console.log(response.data);
  	});
});