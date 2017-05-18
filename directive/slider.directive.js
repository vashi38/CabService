var dir = angular.module("myDrirectives",[]);
dir.directive("mySlider",function(){
	return{
		restrict:'E',

		templateUrl:'directive/slider.html'
	}
});
