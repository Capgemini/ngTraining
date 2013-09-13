angular.module('spa', [])
	.controller('MainCtrl', function($scope, $http) {

		$http.get('/api/products').then(function(response) {
			$scope.products = response.data.products;
		});
		$scope.addToCart = function(product, amount) {
			$http.post('/api/cart', {
				id: product.id,
				amount: amount
			}).then(function(response) {
				$scope.cart = response.data.cart;
			});
		};
	})
	.controller('FormCtrl', function($scope) {
		$scope.amount = 1;
	});