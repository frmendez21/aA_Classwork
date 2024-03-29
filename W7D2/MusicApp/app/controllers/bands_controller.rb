class BandsController < ApplicationController
    def index 
        @bands = Band.all 
        render :index
    end

    def show 
        @band = Band.find_by(id: params[:id])
        render :show
    end

    def create 
        @band = Band.new(bands_params)
        if @band.save! 
            redirect_to band_url(@band.id)
        else  
            render :new 
        end 
    end

    def new 
        @band = Band.new 
        render :new
    end

    def delete 
        band = Band.find_by(id: params[:id])
        band.destroy 
        redirect_to bands_url
    end

    private 

    def bands_params 
        params.require(:band).permit(:name)
    end
end
