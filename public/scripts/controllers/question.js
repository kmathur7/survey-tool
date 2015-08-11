angular.module('surveyApplication')

  .controller('QuestionController',['$scope','$http', function ($scope,$http) {

    $http.get('/getquestions').success(function(questions){
      $scope.questions = questions;
    });
  	var socket = io();
  	$scope.count = 0;
  	$scope.users = 0;
  	$scope.question_no = 0;
  	$scope.next = function(){
  		
  		
  		$scope.question_no+=1;
  		socket.emit('next question',$scope.question_no);
  		$scope.count=0;
  	};

    
    socket.on('incrementcount', function(){
  		$scope.$apply(function(){
  			$scope.count+=1;
  		});
    	
  	});


  	socket.on('connected users', function(value){
  		$scope.$apply(function(){
  			$scope.users=value;
  		});
    	
  	});
    
    
  }]);