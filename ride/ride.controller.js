var app=angular.module("myApp");
app.controller("rideController",function($scope,$state){
	initialize_pickup = function(){
		var pickup = document.getElementById('pickup');
		var autocomplete = new google.maps.places.Autocomplete(pickup);
	}
	initialize_drop = function(){
		var drop = document.getElementById('drop');
		var autocomplete = new google.maps.places.Autocomplete(drop);
	}
	initialize_pickup();
	initialize_drop();
	 $scope.obj1=[
				{
					header:'Business Travel',
					subheader:'Keep work trips separate',
					img:'images/bag.png',
					para:"Whether you’re headed to the airport, a meeting across town, or home after a late night at the office, MyTaxi works just as hard as you do."
				},
				{
					header:'MyTaxiPOOL',
					subheader:'Share your ride and save',
					img:'images/share.jpeg',
					para:"MyTaxiPOOL matches you with riders headed in the same direction. It’s always the cheapest way to MyTaxi. And sharing the ride adds only a few minutes to your trip."
				},
				{
					header:'Airports',
					subheader:'Skip the airport shuttle',
					img:'images/air.jpg',
					para:"Request a ride on-demand at over 400 airports across the globe. And with multiple vehicle options, there's plenty of room for all your luggage."
				}
			];
	
	$scope.obj2=[
	{
		header:'Tap a button, get a ride',
		para:'Choose your ride and set your location. You’ll see your driver’s picture and vehicle details, and can track their arrival on the map.'
	},
	{
		header:'Choose how to pay',
		para:'When you arrive at your destination, either pay with cash or have your card automatically charged. With MyTaxi, the choice is yours.'
	},
	{
		header:'You rate, we listen',
		para:'Rate your driver and provide anonymous feedback about your trip. Your input helps us make every ride a 5-star experience.'
	}];
	
	$scope.corousel = [
	{
		img:'images/car1.jpg',
		header:'Everyday Cab',
		data:'Everyday rides that are always smarter than a taxi'
	},
	{
		img:'images/car2.jpg',
		header:'family Cab',
		data:'Whether business or pleasure, these luxury rides help you make an entrance.'
	},
	{
		img:'images/car3.jpg',
		header:'family Trip',
		data:'Rides that are accessible for wheelchairs or come equipped with car seats'
	},
	{
		img:'images/car4.jpg',
		header:'Rolyal Cab',
		data:'Beatiful flowers in Kolymbari, Crete.'
	},
	
	];
	
	$scope.arr=[0,1,2,3];
})