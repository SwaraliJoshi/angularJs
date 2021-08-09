var app2 = angular.module('app2', []);

app2.controller('ctrl1', function($scope) {
	
    $scope.randomNum1 = Math.floor((Math.random() * 100) + 1);
    $scope.randomNum2 = Math.floor((Math.random() * 100) + 1);

});

app2.controller('moodCtrl', function($scope) {
	
    $scope.randomNum1 = Math.floor((Math.random() * 100) + 1);
    $scope.randomNum2 = Math.floor((Math.random() * 100) + 1);

    if(($scope.randomNum1 + $scope.randomNum2)%4 === 0) {
        $scope.mood = 'Happy';
    } else if(($scope.randomNum1 + $scope.randomNum2)%4 === 1) {
        $scope.mood = 'Angry';
    } else if(($scope.randomNum1 + $scope.randomNum2)%4 === 2) {
        $scope.mood = 'Tired'
    } else {
        $scope.mood = 'Sleepy'
    }

});