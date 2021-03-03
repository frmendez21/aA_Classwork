# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:phil){User.new(username: 'Phil', password: '123456')}
  describe 'validations' do 
    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe 'class_methods' do
    describe '#is_password?' do
      it 'should return true if password matches' do
        expect(phil.is_password?('123456')).to be true
      end
      it 'should return false if password does not matche' do
        expect(phil.is_password?('12345678')).to be false
      end
    end

    describe '#reset_session_token!' do
      it 'should reset the user session token' do
        current_session_token = phil.session_token
        expect(phil.reset_session_token!).not_to equal(current_session_token)
      end
    end

    describe '#ensure_session_token' do
      it 'should ensure there is a session token' do
        expect(phil.ensure_session_token).not_to be_nil 
      end
    end

    describe '::find_by_credentials' do
      it 'should return nil if no user exists with given credentials' do
        expect(User.find_by_credentials('Frank','123456')).to be_nil
      end
      it 'should return user with given credentials' do
        phil.save!
        expect(User.find_by_credentials('Phil','123456').username).to eql('Phil')
      end
    end
  end


end
