var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {
	$scope.first = 0;
	$scope.second = 1;

	$scope.updateValue = function() {
		$scope.calculation = $scope.first + ' + ' + $scope.second + ' = ' + 
		(+$scope.first + +$scope.second);
	};
});