app.factory('Item', ['$resource', function($resource) {
  
  function Item() {
    this.service = $resource('/items/:itemId', {stockId: '@id'});
  };
  
  Item.prototype.all = function() {
    return this.service.query();
  };
  
  Item.prototype.delete = function(itID){
  	this.service.remove({itemId: itID});
  }

  Item.prototype.create = function(attrs){
  	return this.service.save(attrs);
  }
  return new Item;
}]);