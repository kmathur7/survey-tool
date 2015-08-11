angular.module('surveyApplication',['ngRoute'])

	.config(function ($routeProvider) {
    	$routeProvider
    	.when('/', {
        	templateUrl: 'views/home.html',
        	controller: 'HomeController'
      	})
      .when('/questions', {
          templateUrl: 'views/questions.html',
          controller: 'QuestionController'
        })
      .when('/create', {
          templateUrl: 'views/create.html',
          controller: 'CreateController'
        })
      .otherwise({
        	redirectTo: '/'
      	});
  });