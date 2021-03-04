class UsersController < ApplicationController
    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            redirect_to user_url(@user.id)
        else 
            flash[:errors] = @user.errors.full_messages#, status: 422
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
        params.require(:user).permit(:username, :password)
    end
end
