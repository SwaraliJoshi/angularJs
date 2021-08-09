var app4 = angular.module('app4', []);

app4.controller('eventCtrl', function($scope) {
	
   $scope.dayTimeButton=true;

   $scope.capitals = [{city: "Delhi", country: "India"},
   {city: "Muscat", country: "Oman"},
   {city: "Kuwait City", country: "Kuwait"},
   {city: "Doha", country: "Qatar"},
   {city: "Riyadh", country: "Kingdom of Saudi Arabia"},
   {city: "Abu Dhabi", country: "United Arab Emirates"}];

});

// app4.controller('eventCtrl', function($scope) {
	
//     $scope.disableButton=true;
 
//  });

// app4.controller('eventCtrl', function($scope) {
	
//     $scope.blur = 0;
//     $scope.click = 0;
//     $scope.dblclick = 0;
//     $scope.copy = 0;
//     $scope.paste = 0;
//     $scope.keydown = function(e) {
//         $scope.kdKey = String.fromCharCode(e.keyCode);
//     };
//     $scope.mouseenter = 0;
//     $scope.mouseleave = 0;
//     $scope.focus = 0;
//     $scope.model = 0;
//     $scope.change = 0;
//     $scope.cut = 0;



// });