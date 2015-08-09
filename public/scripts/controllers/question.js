angular.module('surveyApplication')

  .controller('QuestionController',['$scope', function ($scope) {
  	var socket = io();
  	$scope.next = function(){
  		
  		socket.emit('next question');
  	};
    
    
    
  }]);