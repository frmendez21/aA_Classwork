class PostsController < ApplicationController

    before_action :require_logged_in, except: :show

    before_action :require_author, except: [:new, :create, :show]
    helper_method :is_author?
    def new
        @post = Post.new
        @post.sub_id = params[:sub_id]
        render :new
    end

    def create
        @post = Post.new(post_params)
        @post.sub_id = params[:sub_id]
        @post.user_id = current_user.id
        if @post.save
            redirect_to post_url(@post)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :new
        end
    end

    def edit
        @post = Post.find_by(id: params[:id])
        render :edit
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            redirect_to post_url(@post)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :edit
        end
    end

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        redirect_to sub_url(@post.sub_id)
        @post.destroy
    end

    private
    def post_params
        params.require(:post).permit(:title, :url, :content, :subs)
    end

    def require_author
        redirect_to post_url(params[:id]) unless is_author?
    end

    def is_author?
        @post = Post.find_by(id: params[:id])
        if @post
            @post.user_id == current_user.id
        else  
            false
        end
    end

end
