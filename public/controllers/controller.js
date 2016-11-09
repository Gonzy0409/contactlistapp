var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
	function($scope, $http){

		var refresh = function(){
			$http.get('/contactlist').success(function(response){
				console.log("Got data!");
				$scope.contactlist = response;
			});
		};

		refresh();

		$scope.addContact = function(){
			console.log($scope.contact);
			$http.post('/contactlist', $scope.contact).success(function(response){
				console.log(response);
				refresh();
			});
		};

		$scope.remove = function(id){
			$http.delete('/contactlist' + id).success(function(response){
				refresh();
			});
		};

	}]);