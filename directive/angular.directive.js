var dir = angular.module("myDrirectives",[]);
dir.directive("myCorousel",function(){
	return{
		restrict:'E',
		scope:{
			corousel:'=object',
			arr:'=arr'
		},
		templateUrl:'directive/corousel.html'
	}
});