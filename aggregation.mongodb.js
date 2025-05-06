use("practice_exam");


//  Find the names and total scores (sum of subject marks) of all students, sorted by total score in descending order.
// db.exam.aggregate([{
//     $project: {
//         _id: 0,
//         name: "$name",
//         totalScores: { $sum: "$scores" }
//     }
// },
// {
//     $sort: {
//         totalScores: -1
//     }
// }])


// Find the average marks for each subject across all students.

// db.exam.aggregate([{
//     $unwind: {
//         path: "$subjects"
//     }
// },
// {
//     $group: {
//       _id: "$subjects.subjectName",
//       avgMarks: {$avg: "$subjects.marks"}
//     }
// }
// ])

// List all students who have a hobby of "reading"
// db.exam.find({
//     hobbies: { $in: ["reading"] }
// }, { _id: 0, name: 1, hobbies: 1 })

// db.exam.aggregate(
//     {
//         $match: {
//             hobbies: "smex"
//         }
//     },
//     {
//         $project: {
//             name: 1,
//             hobbies: 1
//         }
//     }
// )

//  Find the student(s) who scored the highest total marks across all subjects.

// db.exam.aggregate([
//     {
//         $unwind: "$subjects"
//     },
//     {
//         $group: {
//             _id: "$name",
//             totalMarks: {$sum: "$subjects.marks"}
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             name: "$_id",
//             totalMarks: "$totalMarks"
//         }
//     },
//     {
//         $sort: {
//             totalMarks: -1
//         }
//     }
// ])

// List all students and the number of hobbies each one has.
// db.exam.aggregate([
//     {
//         $project: {
//             _id: 0,
//             name: 1,
//             hobbiesCount: {$size: "$hobbies"}
//         }
//     }
// ])

//  Find all students who have "reading" as one of their hobbies and display only their name and hobbies.

// db.exam.aggregate([
//     {
//         $match: {
//             hobbies: {$in: ['reading']}
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             name: 1,
//             hobbies: 1
//         }
//     }
// ])



// For each student, calculate their average score from the scores array and display their name and averageScore.


// db.exam.aggregate([{
//     $project: {
//       name:1,
//       avgScore: {$avg: "$scores"},
//       _id: 0
//     }
// }])

// Find the student(s) with the highest score in "Math" and display their name, subjects, and hobbies.

db.exam.aggregate([
    {
        $unwind: "$subjects"
    },
    {
        $match: {
            "subjects.subjectName": "Math"
        }
    },
    {
        $sort: {
            "subjects.marks": -1
        }
    },
    {
        $limit: 1
    },
    {
        $project: {
            _id: 0,
            name: 1,
            mathsMarks: "$subjects.marks"
        }
    }
])