require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    describe "GET #new" do 
        it "renders the new user template" do 
            get :new

            expect(response).to render_template(:new)
        end
    end 
    describe "POST #create" do 
        context "with valid params" do 
            before :each do 
                post :create, params: {user: {username: "Terry", password: "654321"}}
            end
            it "should create user" do 
                expect(User.last.username).to eql("Terry")
            end
            it "should login user" do 
                user = User.last
                expect(session[:session_token]).to eql(user.session_token)
            end
            it "should redirect to user show page" do 
                user = User.last
                expect(response).to redirect_to(user_url(user))
            end
        end
        context "with invalid params" do 
            before :each do 
                post :create, params: {user: {username: "Terry", password: ""}}
            end
            it "should render new template" do 
                expect(response).to render_template(:new)
            end
            it "should add errors to flash" do 
                expect(flash[:errors]).to be_present
            end
            
        end
    end 
end
