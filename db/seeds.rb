puts "🌱 Seeding spices..."

# Seed your database here

Category.create([
  {
    title: "Work"
  },
  {
    title: "Fitness"
  },
  {
    title: "Nutrition"
  },
  {
    title: "Family"
  },
  {
    title: "Side Work"
  },
  {
    title: "Misc"
  }
])
Task.create([
  {
    body: "Complete Phase 3 Project",
    username: "Steve",
    description: "Finish up and submit project",
    category_id: 1
  },
  {
    body: "Read a chapter on Rails Crash Course",
    username: "Steve",
    description: "Continue reading and outlining Phase4 course content",
    category_id: 1
  },
  {
    body: "Make Dinner",
    username: "Steve",
    description: "Cook Pasta and Chicken Breast",
    category_id: 1
  }
])





puts "✅ Done seeding!"
