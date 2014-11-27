var app = angular.module( 'FindMyPet', [] );

app.controller('Main', function ($scope, $http) {
  $scope.list = "todos";

  $http.get('http://localhost:3000/api/pins/all')
  	.then(function (response) {
  		$scope.pets = response.data;
  		console.log($scope.pets);
  	});
});