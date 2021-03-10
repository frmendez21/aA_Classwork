require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'
require 'byebug'
class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res)
    @req = req 
    @res = res 
    @already_built_response = false
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
  def redirect_to(url)
    raise 'error' if already_built_response?
    @res['Location'] = url 
    @res.status = 302
    @already_built_response = true 
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    raise 'error' if already_built_response?
    @res['Content-Type'] = content_type 
    @res.write(content)
    @already_built_response = true
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
      #self.class.name  
      controller_name = self.class.name
      current_file = File.dirname(__FILE__)
      file_path = File.join(current_file, '..', 'views', controller_name.underscore, template_name.to_s) + '.html' + '.erb'
      
      template = File.read(file_path)
      #"views/#{controller_name}/#{template_name}.html.erb"
      #create a path to template files using template name and classname
      #File.dirname(__FILE___) is current files name
      #File.join('str', 'str2', 'str3') = "str/str2/str3"
      #.underscore changes camel case to underscore

    render_content(ERB.new(template).result(binding), 'text/html')
  end

  # method exposing a `Session` object
  def session
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
  end
end

