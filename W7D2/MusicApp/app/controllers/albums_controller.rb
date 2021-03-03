class AlbumsController < ApplicationController

    def create 
        @album = Album.new(album_params)
        if @album.save! 
            redirect_to band_url(@album.band_id)
        else 
            render :new
        end
    end

    def new 
        @album = Album.new 
        @band = Band.find_by(id: params[:band_id])
        render :new
    end 

    def show 

    end 

    def update 

    end 

    def destroy 

    end 

    private 
    def album_params 
        params.require(:album).permit(:title, :year, :band_id, :live)
    end
end
