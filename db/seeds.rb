# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Visit.destroy_all
Issue.destroy_all
issues1 = Issue.create!(title: "Leaky Roof", location: "Here", quoteCost: "9000.00", actualCost: "9000.01", issueCreate: "Issue Created Today", ticketCreate: "Ticket Created Today", notes: "Generic Notes", closed:"No")
visit1 = Visit.create!(technician: "Bob Barker", dateVisit: "Yesterday", fixedProblem: "Nope", notes: "This is a test note 1", issue_id: issues1.id)
visit2 = Visit.create!(technician: "Bob Barker2", dateVisit: "Yesterday2", fixedProblem: "Nope2", notes: "This is a test note 13", issue_id: issues1.id)