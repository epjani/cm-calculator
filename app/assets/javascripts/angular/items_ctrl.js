app.controller('ItemsCtrl', ['$scope', 'Item', function($scope, Item) {  
  var log = [];
  
  $scope.deleteItem = function(id, idx){  	
  	$scope.items.splice(idx, 1);
  	return Item.delete(id);
  }

  $scope.createItem = function(){
  	var attrs = {};
  	attrs.name = $scope.itemName;
  	// attrs.discount = $scope.itemDiscount;
  	attrs.price = $scope.itemPrice;

  	var newItem = Item.create(attrs);
  	$scope.items.push(newItem);

  	$scope.itemName = "";
  	// $scope.itemDiscount = "";
  	$scope.itemPrice = "";
  }

  $scope.updateItemTotal = function(item){
  	var discount = item.discount || 0;  	
  	item.total = Math.round(((parseFloat(item.price) - (parseFloat(item.price) * discount/100)) * item.quantity) * 100) / 100;
  	$scope.calculateTotal();
  }

  $scope.calculateTotal = function(){
  	$scope.total = 0;
  	console.log($scope.items);
  	angular.forEach($scope.items, function(value, key){
		$scope.total += parseFloat(value.total);
  	}, log);
  	$scope.total = Math.round($scope.total * 100) / 100;
  }

  var init = function(){
  	$scope.items = Item.all();
  	console.log($scope.items);
  	$scope.calculateTotal();
  }

  init();
}]);