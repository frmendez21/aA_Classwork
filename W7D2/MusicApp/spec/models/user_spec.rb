require 'rails_helper'

RSpec.describe User, type: :model do

  subject(:user1) { User.new(email: "frank@aa.io", password: "password123")}
  describe "validations" do 
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe "class methods" do 

    describe "#password?" do 
      it "should return true if the password matches" do 
        expect(user1.password?("password123")).to be true
      end
      it "should return false if the password does not match" do 
        expect(user1.password?("passqord321")).to be false 
      end
    end

    describe "#reset_session_token!" do 
      it "should reset the user's session token" do 
        current_session_token = user1.session_token 
        expect(user1.reset_session_token!).not_to equal(current_session_token)
      end
    end 

    describe "::find_by_credentials" do 
      it "should return nil if no user exists with given credentials" do 
        expect(User.find_by_credentials("frank@aa.io", "password123")).to be_nil
      end
      it "should find a user based on email and password" do 
        user1.save! 
        expect(User.find_by_credentials("frank@aa.io", "password123").email).to eql("frank@aa.io")
      end

    end 
  end

end
