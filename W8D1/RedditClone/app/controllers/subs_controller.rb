class SubsController < ApplicationController

    before_action :require_logged_in, except: [:index, :show]

    before_action :require_moderator, only: [:edit, :update]

    helper_method :is_moderator?, :sub_ids

    

    def new
        @sub = Sub.new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)
        @sub.user_id = current_user.id
        if @sub.save
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def edit
        @sub = Sub.find_by(id: params[:id])
        render :edit
    end

    def update
        @sub = Sub.find_by(id: params[:id])
        if @sub.update(sub_params)
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :edit
        end
    end

    def show
        @sub = Sub.find_by(id: params[:id])
        render :show
    end

    def index
        @subs = Sub.all
        render :index
    end

    def destroy 
        @sub = Sub.find_by(id: params[:id])
        if @sub 
            @sub.destroy 
            redirect_to subs_url
        else 
            flash[:errors] = @sub.errors.full_messages
            redirect_to sub_url(@sub)
        end 
    end 

    private
    def sub_params
        params.require(:sub).permit(:title, :description)
    end

    def require_moderator
        redirect_to subs_url unless is_moderator? 
    end

    def is_moderator? 
        @sub = Sub.find_by(id: params[:id])
        if @sub
            @sub.user_id == current_user.id
        else  
            false
        end
    end
end
