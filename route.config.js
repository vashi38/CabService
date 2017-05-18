var app=angular.module('myApp');
app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider.
	state('app',{
		url:'/',
		views: {
			'header': {
				templateUrl:'header/header.html',
				controller:'headerController',
				controllerAs:'headerCtrl'
			},
			'main': {
				template:'<div ui-view></div>'
			},
			'footer': {
				templateUrl:'footer/footer.html'
			}
		}
	})
	.state('app.home',{
		url:'home',
		templateUrl:'home/home.html',
		controller:'homeController'
	})
	.state('app.ride',{
		url:'ride',
		templateUrl:'ride/ride.html',
		controller:'rideController'

	})
	.state('app.drive',{
		url:'drive',
		templateUrl:'drive/drive.html',
		controller:'driveController'

	})
	.state('app.help',{
		url:'help',
		templateUrl:'help/help.html',
		controller:'helpController'
	})
	.state('app.sign_in',{
		url:'sign_in',
		templateUrl:'sign_in/sign_in.html'
	});


	 $urlRouterProvider.otherwise('home');

});
