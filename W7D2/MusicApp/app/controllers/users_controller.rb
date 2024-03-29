class UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        if @user.valid?
            if @user.save! 
                login!(@user)
                redirect_to bands_url
            else 
                render :new 
            end
        else 
            render :new 
        end
    end 

    def new 
        @user = User.new 
        render :new 
    end

    def show 
        @user = User.find_by(id: params[:id])
        render :show
    end

    private 
    def user_params 
        params.require(:user).permit(:email, :password)
    end
end
