use("TestDB")

// db.createCollection("user")

// db.user.insertOne({name: "Souharda"})

// db.user.insertMany([
//     {
//         name: "Nilashis",
//         roll: 107
//     },
//     {
//         name: "Rudra",
//         roll: 116
//     }
// ])

// db.user.updateOne({name: "Souharda"}, {$set:{roll: 103}})

// db.user.find()

// db.user.findOne({_id: ObjectId("681a80a3006b4300d4f14b3e")})

// db.user.find({$and: [
//     {roll: {$gt: 102}},
//     {roll: {$lt: 109}}
// ]})

// db.user.find({roll: {$gt: 102}, roll: {$lt: 109}}, {_id: 0, name: 1}).sort({name: 1}).limit(1)

// db.user.find({roll: {$exists: false}})
// db.user.find({roll: {$exists: true}})

// db.user.insertMany([
//     {
//         name: "Alice",
//         age: 25,
//         bio: "Loves hiking and outdoor adventures.",
//         city: "New York"
//     },
//     {
//         name: "Bob",
//         age: 30,
//         bio: "A software engineer from California.",
//         city: "San Francisco"
//     },
//     {
//         name: "Charlie",
//         age: 28,
//         bio: "Passionate about data science and AI.",
//         city: "Boston"
//     },
//     {
//         name: "Diana",
//         age: 22,
//         bio: "Graphic designer & artist based in Austin.",
//         city: "Austin"
//     },
//     {
//         name: "Eve",
//         age: 35,
//         bio: "Fitness freak and yoga lover.",
//         city: "Los Angeles"
//     }
// ])


// db.user.createIndex({ bio: "text" })

// db.user.find({
//     $text: {
//         $search: "yoga"
//     }
// }, {_id: 0})

// db.user.find({
//     $text: {
//         $search: "\"data science\""
//     }
// }, {_id: 0})

// db.user.insertMany([
//     { name: "Alice", age: 24, score: 80 },
//     { name: "Bob", age: 30, score: 75 },
//     { name: "Charlie", age: 27, score: 54 },
//     { name: "Diana", age: 22, score: 44 },
//     { name: "Eve", age: 26, score: 52 }
// ])

// db.users.find({ age: { $mod: [2, 0] } })

// db.orders.insertMany([
//     { customer: "Alice", total: 200, items: 4, status: "delivered" },
//     { customer: "Bob", total: 150, items: 3, status: "pending" },
//     { customer: "Alice", total: 100, items: 1, status: "delivered" },
//     { customer: "Diana", total: 300, items: 5, status: "delivered" },
//     { customer: "Bob", total: 50, items: 1, status: "cancelled" },
//     { customer: "Eve", total: 250, items: 6, status: "delivered" }
// ])

// db.orders.aggregate([
//     {
//         $group: {
//             _id: "$customer",
//             totalSpent: { $sum: "$total" }
//         }
//     }
// ])

// db.orders.aggregate([
//     { $group: { _id: "$customer", statuses: { $push: "$status" } } }
// ])

// db.orders.aggregate([
//     {
//         $group: {
//             _id: null,
//             totalOrders: { $sum: 1 },
//             count: { $sum: 1 }
//         }
//     }
// ])


// db.orders.insertOne({
//     customer: "Frank",
//     total: 400,
//     items: 2,
//     status: "delivered",
//     products: ["pen", "notebook", "bag"]
//   })

// db.orders.aggregate([
//     { $unwind: "$products" }
// ])

// db.orders.aggregate([
//     {
//       $addFields: {
//         tax: { $multiply: ["$total", 0.10] }
//       }
//     }
// ])
  



