// use("practice_exam");

// db.createCollection("exam");

// db.exam.insertOne(
//     {
//         "Name": "Souharda",
//         "Roll": 103
//     }
// )

// db.exam.insertMany([
//     {
//         "Name": "Rudra",
//         "Roll": 116
//     },
//     {
//         "Name": "Nilashis",
//         "Roll": 107
//     }
// ])

// db.exam.deleteOne({"Name": "Rudra"})

// db.exam.drop()

// db.exam.insertMany([
//     {
//         name: "Alice",
//         roll: "101",
//         scores: [85, 90, 78],
//         subjects: [
//             { subjectName: "Math", marks: 85 },
//             { subjectName: "Science", marks: 90 },
//             { subjectName: "History", marks: 78 }
//         ],
//         hobbies: ["reading", "swimming", "chess"]
//     },
//     {
//         name: "Bob",
//         roll: "102",
//         scores: [88, 76, 92],
//         subjects: [
//             { subjectName: "Math", marks: 88 },
//             { subjectName: "Science", marks: 76 },
//             { subjectName: "History", marks: 92 }
//         ],
//         hobbies: ["cycling", "painting", "gaming"]
//     },
//     {
//         name: "Charlie",
//         roll: "103",
//         scores: [95, 89, 84],
//         subjects: [
//             { subjectName: "Math", marks: 95 },
//             { subjectName: "Science", marks: 89 },
//             { subjectName: "History", marks: 84 }
//         ],
//         hobbies: ["hiking", "photography", "gardening"]
//     },
//     {
//         name: "Diana",
//         roll: "104",
//         scores: [70, 80, 65],
//         subjects: [
//             { subjectName: "Math", marks: 70 },
//             { subjectName: "Science", marks: 80 },
//             { subjectName: "History", marks: 65 }
//         ],
//         hobbies: ["dancing", "cooking", "yoga"]
//     }
// ])

// db.exam.insertMany([
//     {
//         name: "Kevin",
//         roll: "111",
//         scores: [81, 79, 88],
//         subjects: [
//             { subjectName: "Math", marks: 81 },
//             { subjectName: "Science", marks: 79 },
//             { subjectName: "History", marks: 88 }
//         ],
//         hobbies: ["robotics", "cycling", "movies"]
//     },
//     {
//         name: "Lily",
//         roll: "112",
//         scores: [92, 94, 89],
//         subjects: [
//             { subjectName: "Math", marks: 92 },
//             { subjectName: "Science", marks: 94 },
//             { subjectName: "History", marks: 89 }
//         ],
//         hobbies: ["singing", "painting", "traveling"]
//     },
//     {
//         name: "Mike",
//         roll: "113",
//         scores: [67, 75, 70],
//         subjects: [
//             { subjectName: "Math", marks: 67 },
//             { subjectName: "Science", marks: 75 },
//             { subjectName: "History", marks: 70 }
//         ],
//         hobbies: ["football", "gaming", "mechanics"]
//     },
//     {
//         name: "Nina",
//         roll: "114",
//         scores: [85, 90, 95],
//         subjects: [
//             { subjectName: "Math", marks: 85 },
//             { subjectName: "Science", marks: 90 },
//             { subjectName: "History", marks: 95 }
//         ],
//         hobbies: ["reading", "yoga", "hiking"]
//     },
//     {
//         name: "Oscar",
//         roll: "115",
//         scores: [76, 82, 79],
//         subjects: [
//             { subjectName: "Math", marks: 76 },
//             { subjectName: "Science", marks: 82 },
//             { subjectName: "History", marks: 79 }
//         ],
//         hobbies: ["swimming", "drawing", "gardening"]
//     },
//     {
//         name: "Paula",
//         roll: "116",
//         scores: [88, 85, 84],
//         subjects: [
//             { subjectName: "Math", marks: 88 },
//             { subjectName: "Science", marks: 85 },
//             { subjectName: "History", marks: 84 }
//         ],
//         hobbies: ["blogging", "skating", "puzzles"]
//     },
//     {
//         name: "Quentin",
//         roll: "117",
//         scores: [79, 73, 81],
//         subjects: [
//             { subjectName: "Math", marks: 79 },
//             { subjectName: "Science", marks: 73 },
//             { subjectName: "History", marks: 81 }
//         ],
//         hobbies: ["gaming", "music", "basketball"]
//     },
//     {
//         name: "Rita",
//         roll: "118",
//         scores: [94, 96, 92],
//         subjects: [
//             { subjectName: "Math", marks: 94 },
//             { subjectName: "Science", marks: 96 },
//             { subjectName: "History", marks: 92 }
//         ],
//         hobbies: ["reading", "debating", "travel"]
//     },
//     {
//         name: "Sam",
//         roll: "119",
//         scores: [71, 68, 74],
//         subjects: [
//             { subjectName: "Math", marks: 71 },
//             { subjectName: "Science", marks: 68 },
//             { subjectName: "History", marks: 74 }
//         ],
//         hobbies: ["drumming", "hiking", "comics"]
//     },
//     {
//         name: "Tina",
//         roll: "120",
//         scores: [89, 91, 86],
//         subjects: [
//             { subjectName: "Math", marks: 89 },
//             { subjectName: "Science", marks: 91 },
//             { subjectName: "History", marks: 86 }
//         ],
//         hobbies: ["writing", "singing", "volunteering"]
//     }
// ])


// db.exam.find().count()

// db.exam.find(
//     { name: "Tina" },
//     { name: 1, roll: 1, _id: 0, scores: { $arrayElemAt: ["$scores", 2] } }
// )

// db.exam.find({roll: {$gt: "102"}}, {roll: 1, _id: 0})

// db.exam.find({scores: {$in: [70]}})

// db.exam.find({$and:[
//     {
//         name: {$regex: "t"}
//     },
//     {
//         roll: {$gt: "112"}
//     }
// ]})

// db.exam.find({name: {$regex: "t"}, roll: {$gt: "112"}})

// db.exam.find({name: {$exists: true}})

// db.exam.find({$expr: {$gt: [{$arrayElemAt: ["$scores", 0]}, {$arrayElemAt: ["$scores", 1]}]}})

// db.exam.find({
// 	$expr: {
// 		$eq: [
// 			{ $mod: [{ $arrayElemAt: ["$scores", 0] }, 2] },
// 			0
// 		]
// 	}
// })


// db.exam.updateOne({roll: "102"}, {$addToSet: {hobbies: "Gardening"}})


// db.exam.updateOne({roll: "102"}, {$pop: {hobbies: 1}})

// db.exam.updateOne({roll: "102"}, {$pull: {hobbies: "Gardening"}})
// db.exam.findOne({roll: "102"})

// db.exam.find({roll: "120"}, {hobbies: {$slice: [0,2]}})

// db.exam.find({
//     $and: [
//         {
//             subjects: {
//                 $elemMatch: {
//                     subjectName: "Math",
//                     marks: { $gt: 80 }
//                 }
//             }
//         },
//         {
//             subjects: {
//                 $elemMatch: {
//                     subjectName: "History",
//                     marks: { $gt: 80 }
//                 }
//             }
//         }
//     ]
// })

// db.exam.find({
//     subjects:{
//         $all:[
//             {$elemMatch: {
//                 subjectName: "Math",
//                 marks: { $gt: 80 }
//             }},
//             {$elemMatch: {
//                 subjectName: "History",
//                 marks: { $gt: 80 }
//             }}
//         ]
//     }
// })

// db.exam.updateOne(
//     {
//         roll: "120",
//         "subjects.subjectName": "Science"
//     },
//     {
//         $set: {
//             "subjects.$.marks": 95
//         }
//     }
// )


// // //  Find the names and total scores (sum of subject marks) of all students, sorted by total score in descending order.

// db.exam.aggregate([
//     {
//         $project: {
//             _id: 0,
//             name: "$name",
//             TotalScore: { $sum: "$scores" }
//         }
//     },
//     {
//         $sort:{
//             TotalScore: -1  
//         }

//     }
// ])


// // Find the average marks for each subject across all students.

// db.exam.aggregate([
//   {
//     $unwind: {
//       path: "$subjects"
//     }
//   },
//   {
//     $group: {
//       _id : "$subjects.subjectName",
//       AvgMarks: {$avg: "$subjects.marks"}
//     }
//   }
// ])


// // List all students who have a hobby of "reading"

// db.exam.aggregate([
//   {
//     $match:{
//       hobbies: "reading",
//     }
//   },
//   {
//     $project:{
//       _id: 0,
//       name: 1,
//       hobbies: 1
//     }
//   }
// ])


// // Find the student(s) who scored the highest total marks across all subjects.

// db.exam.aggregate([
//   {
//     $unwind: "$subjects"
//   },
//   {
//     $group: {
//       _id: "$name",
//       totalMarks: { $sum: "$subjects.marks" }
//     }
//   },
//   {
//     $project: {
//       _id: 0,
//       name: "$_id",
//       totalMarks: "$totalMarks"
//     }
//   },
//   {
//     $sort: {
//       totalMarks: -1
//     }
//   }
// ])

// // List all students and the number of hobbies each one has.

// db.exam.aggregate([
//   {
//     $project: {
//       _id: 0,
//       name: "$name",
//       hobbies: {$size: "$hobbies"}
//     }
//   }
// ])


// // Find all students who have "reading" as one of their hobbies and display only their name and hobbies.

// db.exam.aggregate([
//   {
//     $match:{
//       hobbies: "reading"
//     }
//   },
//   {
//     $project:{
//       _id: 0,
//       name: "$name",
//       hobbies: "$hobbies"
//     }
//   }
// ])

// // For each student, calculate their average score from the scores array and display their name and averageScore

// db.exam.aggregate([
//   {
//     $project: {
//       _id: 0,
//       name: "$name",
//       AvgScores: {$avg: "$scores"}
//     }
//   }
// ])


// // Find the student(s) with the highest score in "Math" and display their name, subjects, and hobbies

// db.exam.aggregate([
//   {
//     $unwind: "$subjects"
//   },
//   {
//     $match:{
//       "subjects.subjectName": "Math"
//     }
//   },
//   {
//     $sort:{
//       "subjects.marks": -1
//     }
//   },
//   {
//     $limit: 1
//   },
//   {
//     $project:{
//       _id: 0,
//       name: "$name",
//       subjects: "$subjects",
//       hobbies: "$hobbies"
//     }
//   }
// ])

//
// db.exam.createIndex({roll: 1})
// db.exam.find({roll: "120"})

// db.exam.getIndexes()

// db.exam.dropIndex("roll_1")


const data = [
  { brand: "Adidas", quantity: 10 },
  { brand: "Puma", quantity: 2 },
  { brand: "Bata", quantity: 4 },
  { brand: "Adidas", quantity: 5 },
  { brand: "Puma", quantity: 1 },
  { brand: "RedTape", quantity: 4 }
];

const result = {};
data.forEach((n) => {
  result[n.brand] = (result[n.brand] || 0) + n.quantity;
});
console.log(result);