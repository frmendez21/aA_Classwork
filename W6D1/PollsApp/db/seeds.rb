# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'Frank')
User.create(username: 'John')
Poll.create(title: 'Ruby or Javascript', author_id: 1)
Poll.create(title: 'Pizza or Burgers', author_id: 2)
Question.create(text: 'Which language is better Ruby or Javascript?', poll_id: 1)
Question.create(text: 'Do you prefer Pizza or Burgers?', poll_id: 2)
Answer_choice.create(question_id: 1, text: 'Ruby is the best')
Answer_choice.create(question_id: 1, text: 'Javascript is the best')
Answer_choice.create(question_id: 2, text: 'Pizza is the best')
Answer_choice.create(question_id: 2, text: 'Burgers are the best')
Response.create(respondent_id: 2, answer_choice_id: 1)
Response.create(respondent_id: 2, answer_choice_id: 2)
Response.create(respondent_id: 1, answer_choice_id: 3)
Response.create(respondent_id: 1, answer_choice_id: 4)