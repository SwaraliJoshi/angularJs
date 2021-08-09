var app3 = angular.module('app3', []);

app3.controller('gListCtrl', function($scope) {
	
    $scope.groceries = [
        {item: "Tomatoes", purchased: false},
        {item: "Potatoes", purchased: false},
        {item: "Onions", purchased: false},
        {item: "Carrots", purchased: false},
        {item: "Cucumbers", purchased: false},
        {item: "Rice", purchased: false},
        {item: "Pulses", purchased: false}
    ];

    $scope.getList = function() {
        return $scope.showList ?
        //  "Hello" : "Hey";
        "ulgroceryList.html" : "groceryList.html";
    };

});