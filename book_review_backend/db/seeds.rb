# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.destroy_all
20.times do
  Book.create!(title: Faker::Book.unique.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre)
end

Review.create(content: "Very well writen", book_id: 1)
Review.create(content: "Great, informative book.", book_id: 2)
Review.create(content: "Definitely recommend this book! ", book_id: 3)
