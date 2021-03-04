require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  scenario 'has a new user page' do
    visit new_user_url
    expect(page).to have_content "New User Form"
  end

  feature 'signing up a user' do

    before(:each) do
      # user = User.last
      # visit user_url(user.id)
      visit new_user_url
      fill_in "Username:", :with => "Bill"
      fill_in "Password:", :with => "123456"
      click_on "Sign Up"
    end

    scenario 'redirect to users page after sign up' do
      expect(page).to have_content "Bill's Page"
    end

    # scenario 'shows username on the homepage after signup' do
    #   expect(page).to have_content " "
    # end

  end
end