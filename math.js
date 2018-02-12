var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    $scope.minus = function() {     

	    var a = Number($scope.a || 0);
            var b = Number($scope.b || 0);
            $scope.sub = a-b;
	   // $scope.sum = $scope.sum1+1; 
	   alert($scope.sub);
    }

   $scope.add = function() {     

	    var c = Number($scope.c || 0);
            var d = Number($scope.d || 0);
            $scope.add = c+d;
	   alert($scope.add);
    }
});

/*function add_number() {
               
    var first_number = parseInt(document.getElementById("Text1").value);
    var second_number = parseInt(document.getElementById("Text2").value);
    var result = first_number + second_number;

    document.getElementById("txtresult").value = result;
}*/