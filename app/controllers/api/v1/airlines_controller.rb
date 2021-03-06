class Api::V1::AirlinesController < ApplicationController


  def index
    render json: Airline.all
  end

  def show
    @airline = Airline.find(params[:id])

    render json: { airline: @airline, reviews: @airline.reviews }
  end

#   def create
#   data = JSON.parse(request.body.read)
#   new_game = Airline.create(name: data["name"], destinations: data["promo_image_url"], overall_rating: 1 )
#   render json: new_airline
# end


  def airline_params
    params.require(:airline).permit(:name, :destinations, :overall_rating)
  end
end
