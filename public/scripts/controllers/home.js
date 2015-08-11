angular.module('surveyApplication')

  .controller('HomeController',['$scope','$http', function ($scope,$http) {
    var socket = io();
  	$scope.send = function () {

  		$http.post('/feedback',$scope.response).success(function(response){
  			socket.emit('answered');
  			$scope.disable=true;
  		});
  	};
  	socket.on('nxtQ', function(){
  		$scope.$apply(function(){
  			$scope.disable=false;
  		});
    	
  		});
    
    
    
  }]);