require 'json'

class Session
  # find the cookie for this app
  # deserialize the cookie into a hash
  def initialize(req)
    cookie = req.cookies.find(name: '_rails_lite_app')
    cookie 
  end

  def [](key)
  end

  def []=(key, val)
  end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies
  def store_session(res)
  end
end
