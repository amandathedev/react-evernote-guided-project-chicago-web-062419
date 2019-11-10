# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u = User.create(name: ENV['USER'])

Note.destroy_all
# 10.times do
#   Note.create(user: u, title: Faker::Lorem.sentence(rand(4) + 1, true), body: Faker::Lorem.paragraphs(3, true).join('\n'), category: "Reminders")
# end


Category.create(name: "Javascript")
Category.create(name: "HTML")
Category.create(name: "CSS")
Category.create(name: "React")
Category.create(name: "Node")
Category.create(name: "Ruby")

Note.create(user: u, title: "React", body: "The React framework is built entirely out of JavaScript, using a combination of dependencies.", category_id: 4)
Note.create(user: u, title: "Node", body: "A JS runtime environment, allowing JS to be run locally on your computer instead of in a browser.", category_id: 1)
Note.create(user: u, title: "Frames", body: "The <frame> tag defines one specific window frame within a <frameset>. Each <frame> in a <frameset> can have different attributes, such as border, scrolling, the ability to resize, etc.", category_id: 2)
Note.create(user: u, title: "The Box Model", body: "In a document, each element is represented as a rectangular box. In CSS, each of these rectangular boxes is described using the standard box model. Each box has four edges: the margin edge, border edge, padding edge, and content edge.", category_id: 3)
Note.create(user: u, title: "Media Queries", body: "A media query is composed of an optional media type and any number of media feature expressions. Multiple queries can be combined in various ways by using logical operators.", category_id: 3)
Note.create(user: u, title: "Higher Order Functions", body: "Functions that take a function as an argument, or they return another function.", category_id: 1)
Note.create(user: u, title: "Bootstrap", body: "The most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.", category_id: 3)
Note.create(user: u, title: "Class components", body: "Class components have state, lifecycle methods, and can contain their own custom class methods.", category_id: 4)
Note.create(user: u, title: "gets.chomp", body: "Retrieves a user's input and allows us to use it in our code.", category_id: 6)
Note.create(user: u, title: "Rack", body: "A gem for Ruby that will help us create a web server at its simplest. This gem is called Rack and it is what Rails is built on top of.", category_id: 6)