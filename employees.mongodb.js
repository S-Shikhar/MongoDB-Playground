
use("sample");

// db.createCollection("xyz");

// db.xyz.drop();

// //Create a new collection named "employees"
// db.createCollection("employees");

// // insert a document into the employees collection
// db.employees.insertOne(
//     {
//         "employeeNumber": 2001,
//         "lastName": "Smith",
//         "firstName": "John",
//         "extension": "x1234",
//         "email": "jsmith@classicmodelcars.com",
//         "officeCode": "1",
//         "reportsTo": 1056,
//         "jobTitle": "Sales Rep"
//       }
// )

// // insert multiple documents into the employees collection
// db.employees.insertMany([
//     {
//       employeeNumber: 1002,
//       lastName: "Murphy",
//       firstName: "Diane",
//       extension: "x5800",
//       email: "dmurphy@classicmodelcars.com",
//       officeCode: "1",
//       reportsTo: null,
//       jobTitle: "President"
//     },
//     {
//       employeeNumber: 1056,
//       lastName: "Patterson",
//       firstName: "Mary",
//       extension: "x4611",
//       email: "mpatterso@classicmodelcars.com",
//       officeCode: "1",
//       reportsTo: 1002,
//       jobTitle: "VP Sales"
//     },
//     {
//       employeeNumber: 1076,
//       lastName: "Firrelli",
//       firstName: "Jeff",
//       extension: "x9273",
//       email: "jfirrelli@classicmodelcars.com",
//       officeCode: "1",
//       reportsTo: 1002,
//       jobTitle: "VP Marketing"
//     },
//     {
//       employeeNumber: 1088,
//       lastName: "Patterson",
//       firstName: "William",
//       extension: "x4871",
//       email: "wpatterson@classicmodelcars.com",
//       officeCode: "6",
//       reportsTo: 1056,
//       jobTitle: "Sales Manager (APAC)"
//     },
//     {
//       employeeNumber: 1102,
//       lastName: "Bondur",
//       firstName: "Gerard",
//       extension: "x5408",
//       email: "gbondur@classicmodelcars.com",
//       officeCode: "4",
//       reportsTo: 1056,
//       jobTitle: "Sale Manager (EMEA)"
//     },
//     {
//       employeeNumber: 1143,
//       lastName: "Bow",
//       firstName: "Anthony",
//       extension: "x5428",
//       email: "abow@classicmodelcars.com",
//       officeCode: "1",
//       reportsTo: 1056,
//       jobTitle: "Sales Manager (NA)"
//     },
//     {
//       employeeNumber: 1165,
//       lastName: "Jennings",
//       firstName: "Leslie",
//       extension: "x3291",
//       email: "ljennings@classicmodelcars.com",
//       officeCode: "1",
//       reportsTo: 1143,
//       jobTitle: "Sales Rep"
//     },
//     {
//       employeeNumber: 1166,
//       lastName: "Thompson",
//       firstName: "Leslie",
//       extension: "x4065",
//       email: "lthompson@classicmodelcars.com",
//       officeCode: "1",
//       reportsTo: 1143,
//       jobTitle: "Sales Rep"
//     },
//     {
//       employeeNumber: 1188,
//       lastName: "Firrelli",
//       firstName: "Julie",
//       extension: "x2173",
//       email: "jfirrelli@classicmodelcars.com",
//       officeCode: "2",
//       reportsTo: 1143,
//       jobTitle: "Sales Rep"
//     },
//     {
//       employeeNumber: 1216,
//       lastName: "Patterson",
//       firstName: "Steve",
//       extension: "x4334",
//       email: "spatterson@classicmodelcars.com",
//       officeCode: "2",
//       reportsTo: 1143,
//       jobTitle: "Sales Rep"
//     },
//     {
//       employeeNumber: 1286,
//       lastName: "Tseng",
//       firstName: "Foon Yue",
//       extension: "x2248",
//       email: "ftseng@classicmodelcars.com",
//       officeCode: "3",
//       reportsTo: 1143,
//       jobTitle: "Sales Rep"
//     },
//     {
//       employeeNumber: 1323,
//       lastName: "Vanauf",
//       firstName: "George",
//       extension: "x4102",
//       email: "gvanauf@classicmodelcars.com",
//       officeCode: "3",
//       reportsTo: 1143,
//       jobTitle: "Sales Rep"
//     },
//     {
//       employeeNumber: 1337,
//       lastName: "Bondur",
//       firstName: "Loui",
//       extension: "x6493",
//       email: "bondur@classicmodelcars.com",
//       officeCode: "4",
//       reportsTo: 1102,
//       jobTitle: "Sales Rep"
//     },
//     {
//       employeeNumber: 1370,
//       lastName: "Hernandez",
//       firstName: "Gerard",
//       extension: "x2028",
//       email: "ghernande@classicmodelcars.com",
//       officeCode: "4",
//       reportsTo: 1102,
//       jobTitle: "Sales Rep"
//     },
//     {
//       employeeNumber: 1401,
//       lastName: "Castillo",
//       firstName: "Pamela",
//       extension: "x2759",
//       email: "pcastillo@classicmodelcars.com",
//       officeCode: "4",
//       reportsTo: 1102,
//       jobTitle: "Sales Rep"
//     },
//     {
//       employeeNumber: 1501,
//       lastName: "Rott",
//       firstName: "Larry",
//       extension: "x2311",
//       email: "lrott@classicmodelcars.com",
//       officeCode: "7",
//       reportsTo: 1102,
//       jobTitle: "Sales Rep"
//     }
//   ]);


// // Find all employees with the job title "Sales Rep"
// // returns all employees with the job title "Sales Rep" and only the email field
// db.employees.find({jobTitle: "Sales Rep"}, {email: 1, _id: 0})  

// // find all employees whose employeeNumber is greater than 1200
// db.employees.find({employeeNumber: {$gt: 1200}})

// // find all employees whose officeCode is "1" and jobTitle is "Sales Rep"
// db.employees.find({officeCode: "1", jobTitle: "Sales Rep"})
// db.employees.find({$and: [{officeCode: "1"}, {jobTitle: "Sales Rep"}]})

// // find all employees who have reportsTo field
// db.employees.find({"reportsTo": {$exists: true}})

// // find all employees who have email field and email ends with "classicmodelcars.com"
// db.employees.find({"email": {$regex: "@classicmodelcars.com"}})


// // find all employees whose officeCode is "1", "2" or "3"
// db.employees.find({officeCode: {$in: ["1", "2", "3"]}})


// // find all employees whose employeeNumber is 1166, change the jobTitle to "Senior Sales Rep" 
// db.employees.updateOne({employeeNumber: 1166}, {$set: {jobTitle: "Senior Sales Rep"}})
// db.employees.find({employeeNumber: 1166})

// // find all employees whos permissions are 101 (5 in decimal) 
// db.employees.find({permissions: {$bitsAllSet: 5}})


// // find all employees jobtitle and count them
// db.employees.aggregate([
//     {$group: {
//         _id: "$jobTitle",
//         count: {$sum: 1}
//     }}
// ])


// // find all employees whose officeCode is "1" and group them by jobTitle and count them
// db.employees.aggregate([
//     {$match: 
//         {
//             officeCode: "1"
//         }
//     },

//     {$group: 
//         {
//             _id: "$jobTitle",
//             count: {$sum: 1}
//         }
//     }
// ])


// // group employees by reportsTo and count them and sort them by count in descending order
// db.employees.aggregate([
//     {$group:
//         {
//             _id: "$reportsTo",
//             count: {$sum: 1}
//         }
//     },
//     {$sort:
//         {
//             count: -1
//         }
//     }
// ])


// // project all employees firstName and lastName and create a new field fullName which is a concatenation of firstName and lastName
// db.employees.aggregate([
//     {$project: {
//         _id: 0,
//         firstName: 1,
//         lastName: 1,
//         fullName: {$concat: ["$firstName", " ", "$lastName"]}
//     }}
// ])


// // group employees by reportsTo and use $push and $addToSet to get the jobTitle of employees who report to the same manager
// db.employees.aggregate([
//     {$group: {
//         _id: "$reportsTo",
//         jobTitle1: {$push: "$jobTitle"}, // shows duplicate job titles
//         jobTitle2: {$addToSet: "$jobTitle"} // shows unique job titles
//     }}
// ])


// // update the employee with employeeNumber 1166 and pull the skill "CRM" from the skills array
// db.employees.update({employeeNumber: 1166}, {$pull: {skills: "CRM"}})
// db.employees.find({employeeNumber: 1166})

// // update the employee with employeeNumber 1166 and pop the last element from the skills array
// // 1 for last element, -1 for first element
// db.employees.update({employeeNumber: 1166}, {$pop: {skills: 1}}) 
// db.employees.find({employeeNumber: 1166})

// // Find all employees whose skills array exists and has more than 2 elements using $expr
// db.employees.find({skills: {$exists: true}, $where: "this.skills.length > 2"})
// db.employees.find({$expr: {$gt: [{ $size: "$skills" }, 2]}})

// // Find all employees whose employeeNumber is greater than reportsTo using $expr
// db.employees.find({$expr: {$gt: ["$employeeNumber", "$reportsTo"]}})

// // Find all employees whose firstName is "Leslie" or "Pamela" and jobTitle is not "Sales Rep"
// db.employees.find({
//     firstName: {$in: ["Leslie", "Pamela"]},
//     jobTitle: {$nin: ["Sales Rep", ]}
// })

// // Find all employees whose reportsTo field exists and jobTitle contains "President"
// db.employees.find({
//     reportsTo: {$exists: true},
//     jobTitle: {$regex: "President"}
// })


// // Find all employees whose skills array exists and has exactly 3 elements and one of the elements is "Negotiation"
// db.employees.find({
//     $expr: {$eq: [{$size: "$skills"}, 3]},
//     skills: "Negotiation"
// })


// // Find all employees whose employeeNumber is divisible by 5
// db.employees.find({
//     employeeNumber: {$mod: [5, 0]}
// })


// // Find all employees whose skills array contains "Negotiation", "CRM" and "Time Management"
// db.employees.find({
//     skills: {$all: ["Negotiation", "CRM", "Time Management"]}
// })


// // find all employees whose projects hours is greater than 30
// db.employees.find({
//     projects: {$elemMatch: {hours: {$gt: 30}}}
// })


// // find all employees whose projects hours is greater than 30 and name is "CRM Revamap"
// db.employees.find({
//     projects: {$elemMatch: {hours: {$gt: 30}, name: "CRM Revamap"}}
// })


// db.employees.find({skills: "CRM", employeeNumber: {$mod: [3, 0]}})


// // Find all employees whose skills array exists and has more than 2 elements and less than 5 elements and one of the elements is "Negotiation"
// db.employees.find({
//     skills: "Negotiation", 
//     $expr: 
//     {$and:[ 
//         {$gt: [{$size: "$skills"}, 2]}, 
//         {$lt: [{$size: "$skills"}, 5]}
//         ]
//     }
// })


// // Find all employees whose projects array exists and has more than 2 elements and one of the elements is "CRM Revamp"
// db.employees.find({
//     projects: {
//         $exists: true,
//         $elemMatch: {
//             hours: {$gt: 40},
//             name: {$regex: "Revamp"}
//         }
//     }
// })



// // // Indexing

// db.employees.find({jobTitle: "Sales Rep"}).explain("executionStats")


// db.employees.createIndex({jobTitle: 1})
// db.employees.find({jobTitle: "Sales Rep"}).explain("executionStats")

// db.employees.createIndex({jobTitle: 1, officeCode: 1})
// db.employees.find({jobTitle: "Sales Rep", officeCode: "1"}).explain("executionStats")

// db.employees.createIndex({email: 1})
// db.employees.find({email: {$regex: "@classicmodelcars.com"}}).explain("executionStats")


// db.employees.find({
//     skills: "CRM",
//     projects: {
//         $elemMatch: {
//             hours: {$gt: 25}
//         }
//     },
//     jobTitle: {$not: {$regex: "Manager"}}
// })

// db.employees.find({
//     reportsTo: {$exists: False},
//     $expr: {$gte: [{$size: "$skills"}, 3]},
//     projects: {
//         $elemMatch: {
//             name: {$regex: "REVIMP"},
//             hours: {$lte: 40}
//         }
//     }
// })