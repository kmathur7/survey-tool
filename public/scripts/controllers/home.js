angular.module('surveyApplication')

  .controller('HomeController',['$scope','$http', function ($scope,$http) {
  	var socket = io();
  	$scope.send = function () {

  		$http.post('/feedback',$scope.response).success(function(response){
  			console.log("sent to backend");
  			$scope.disable=true;
  		});
  	};
  	socket.on('nxtQ', function(){
  		console.log("next question");
  		$scope.$apply(function(){
  			$scope.disable=false;
  		});
    	
  		});
    
    
    
  }]);