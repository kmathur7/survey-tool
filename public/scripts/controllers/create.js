angular.module('surveyApplication')

.controller('CreateController',['$scope','$http', function ($scope,$http) {

	$scope.add = function(){
		$http.post('/addquestion',$scope.question).success(function(response){
  		});
	};
}]);