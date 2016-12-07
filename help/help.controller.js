var app=angular.module("myApp");
app.controller("helpController",function($scope,$state){
	$scope.obj1=[
	{
		img:'images/mobileapp.png',
		header:'A Guide to MyTaxi',
		subheader1:"MyTaxi's New Rider App",
		subheader2:"MyTaxi Overview",
		subheader3:"Signing Up"
	},
	{
		img:'images/shake.png',
		header:'Accessibility',
		subheader1:"How to use VoiceOver",
		subheader2:"What is MyTaxi’s policy about service animals and assistive devices?",
		subheader3:""
	},
	{
		img:'images/acc.jpg',
		header:'Account and Payment',
		subheader1:"I can't sign in or request a ride",
		subheader2:"Account Settings and Ratings",
		subheader3:"Notifications"
	},
	{
		img:'images/keys.png',
		header:'Driving with MyTaxi',
		subheader1:"Sign up to drive",
		subheader2:"Need more info about signing up to drive?",
		subheader3:""
	},
	{
		img:'images/ticket.jpg',
		header:'Events and Inquiries',
		subheader1:"Press, Law Enforcement, and Other Requests",
		subheader2:" ",
		subheader3:" "
	},
	{
		img:'images/bag.png',
		header:'Business Travel',
		subheader1:"MyTaxi for Business Overview",
		subheader2:"Admin Accounts",
		subheader3:"Employee Accounts"
	},
	
	];
})