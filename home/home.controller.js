var app = angular.module("myApp");
app.controller("homeController",function($scope,$state){
	
	initialize = function(){
		var input = document.getElementById('city');
		var autocomplete = new google.maps.places.Autocomplete(input);
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);
	
	
	$scope.obj1=[
	{
		header:'Behind The Wheel',
		subheader:'They are people like you, </br> Going your way.',
		data:'What makes the MyTaxi experience truly great are the people behind the wheel. They are mothers and fathers. Students and teachers. Veterans. Neighbors. Friends. Our partners drive their own cars—on their own schedule—in cities big and small. Which is why more than one million people worldwide have signed up to drive.',		
		img:'images/driver.jpg'
	},
	{
		header:'Helping Cities',
		subheader:'For the good of all',
		data:'A city with MyTaxi has more economic opportunities for residents, fewer drunk drivers on the streets, and better access to transportation for those without it.',
		img:'images/advan.png'

	},
	{
		header:'Safety',
		subheader:'Putting people first',
		data:'Whether riding in the backseat or driving up front, every part of the MyTaxi experience has been designed around your safety and security.',		
		img:'images/safty.jpg'
	},
	
	];
	
	$scope.arr=[0,1,2,3,4];
	
	$scope.corousel=[
	{
		img:'images/signin1.jpg',
		header:'Sign In',
		data:'The atmosphere in Chania has a touch of Florence and Venice.'
	},
	{
		img:'images/destination1.jpg',
		header:'Select The Destination',
		data:'The atmosphere in Chania has a touch of Florence and Venice.'
	},
	{
		img:'images/selectcar.jpg',
		header:'Select The Type of Car',
		data:'The atmosphere in Chania has a touch of Florence and Venice.'
	},
	{
		img:'images/walletes1.jpg',
		header:'Select Mode of payment',
		data:'The atmosphere in Chania has a touch of Florence and Venice.'
	},
	{
		img:'images/book1.png',
		header:'Book A Cab',
		data:'The atmosphere in Chania has a touch of Florence and Venice.'
	}
	]
})


app.directive("myCorousel",function(){
	return{
		restrict:'E',
		scope:{
			corousel:'=object',
			arr:'=arr'
		},
		templateUrl:'directive/corousel.html'
	}
});