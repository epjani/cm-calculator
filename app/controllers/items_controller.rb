class ItemsController < ApplicationController
	respond_to :json

	def index
		items = Item.all
		jsoned_data = []
		items.each do |item|
			jsoned_data << {:name => item.name, :price => item.price, :total => 0, :quantity => 0, :discount => 0}
		end
		respond_with jsoned_data
	end

	def create
		respond_with Item.create(item_params)
	end

	def destroy
		respond_with Item.destroy(params[:id])
	end

	private

	def item_params
		params.require(:item).permit(:name, :price)
	end
end