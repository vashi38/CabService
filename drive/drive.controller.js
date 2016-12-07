var app = angular.module("myApp");
app.controller('driveController',function($scope,$state){
	$scope.obj1=[
	{
		img:'images/schedule.png',
		header:'Set your own schedule',
		data:'You can drive with MyTaxi anytime, day or night, 365 days a year. When you drive is always up to you, so it never interferes with the important things in your life.'
	},
	{
		img:'images/turn.jpg',
		header:'Make more at every turn',
		data:'Trip fares start with a base amount, then increase with time and distance. And when demand is higher than normal, drivers make more.'
	},
	{
		img:'images/app.jpg',
		header:'Let the app lead the way',
		data:'Just tap and go. You’ll get turn-by-turn directions, tools to help you make more, and 24/7 support—all available right there in the app.'
	}
	
	];
	$scope.arr=[0,1,2];
	$scope.corousel=[
	{
		img:'images/signin.jpg',
		header:'Sign up online',
		data:'Tell us a little about yourself and your car.Vehicle requirements vary by region, so we’ll show you what’s needed for your city'
	},
	{
		img:'images/sharedoc.jpg',
		header:'Share some documents',
		data:'Just upload your license, registration, proof of insurance, and the necessary information to start a driver screening.'
	},
	{
		img:'images/go.jpg',
		header:'Get the app and go',
		data:''
	}	
	];
	$scope.obj2=[
	{
		img:'images/reward.jpg',
		header:'Rewards',
		data:'You’re in the driver’s seat. So reward yourself with discounts on fuel, vehicle maintenance, cell phone bills, and more. Reduce your daily expenses and take home extra cash'
	},
	{
		img:'images/recuit.jpg',
		header:'Requirements',
		data:'Know you’re ready to hit the road. Whether you’re driving your own car or a commercially-licensed vehicle, you must meet the minimum requirements and complete a safety screening online.'
	},
	{
		img:'images/safety.jpg',
		header:'Safety',
		data:'When you drive with MyTaxi, you get 24/7 driver support and insurance coverage. And all riders are verified with their personal information and phone number, so you’ll know who you’re picking up and so will we.'
	}
	
	];
})