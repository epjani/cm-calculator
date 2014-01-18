class Item < ActiveRecord::Base
	attr_accessor :total
	def total
		return self.price
	end
end
