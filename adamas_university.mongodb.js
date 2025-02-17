// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("adamas_university");

db.student_details.insertMany([
  {
    employeeNumber: 1002,
    lastName: "Murphy",
    firstName: "Diane",
    extension: "x5800",
    email: "dmurphy@classicmodelcars.com",
    officeCode: 1,
    reportsTo: null,
    jobTitle: "President",
  },
  {
    employeeNumber: 1056,
    lastName: "Patterson",
    firstName: "Mary",
    extension: "x4611",
    email: "mpatterso@classicmodelcars.com",
    officeCode: 1,
    reportsTo: 1002,
    jobTitle: "VP Sales",
  },
  {
    employeeNumber: 1076,
    lastName: "Firrelli",
    firstName: "Jeff",
    extension: "x9273",
    email: "jfirrelli@classicmodelcars.com",
    officeCode: 1,
    reportsTo: 1002,
    jobTitle: "VP Marketing",
  },
  {
    employeeNumber: 1088,
    lastName: "Patterson",
    firstName: "William",
    extension: "x4871",
    email: "wpatterson@classicmodelcars.com",
    officeCode: 6,
    reportsTo: 1056,
    jobTitle: "Sales Manager (APAC)",
  },
  {
    employeeNumber: 1102,
    lastName: "Bondur",
    firstName: "Gerard",
    extension: "x5408",
    email: "gbondur@classicmodelcars.com",
    officeCode: 4,
    reportsTo: 1056,
    jobTitle: "Sale Manager (EMEA)",
  },
  {
    employeeNumber: 1143,
    lastName: "Bow",
    firstName: "Anthony",
    extension: "x5428",
    email: "abow@classicmodelcars.com",
    officeCode: 1,
    reportsTo: 1056,
    jobTitle: "Sales Manager (NA)",
  },
  {
    employeeNumber: 1165,
    lastName: "Jennings",
    firstName: "Leslie",
    extension: "x3291",
    email: "ljennings@classicmodelcars.com",
    officeCode: 1,
    reportsTo: 1143,
    jobTitle: "Sales Rep",
  },
  {
    employeeNumber: 1166,
    lastName: "Thompson",
    firstName: "Leslie",
    extension: "x4065",
    email: "lthompson@classicmodelcars.com",
    officeCode: 1,
    reportsTo: 1143,
    jobTitle: "Sales Rep",
  },
  {
    employeeNumber: 1188,
    lastName: "Firrelli",
    firstName: "Julie",
    extension: "x2173",
    email: "jfirrelli@classicmodelcars.com",
    officeCode: 2,
    reportsTo: 1143,
    jobTitle: "Sales Rep",
  },
  {
    employeeNumber: 1216,
    lastName: "Patterson",
    firstName: "Steve",
    extension: "x4334",
    email: "spatterson@classicmodelcars.com",
    officeCode: 2,
    reportsTo: 1143,
    jobTitle: "Sales Rep",
  },
  {
    employeeNumber: 1286,
    lastName: "Tseng",
    firstName: "Foon Yue",
    extension: "x2248",
    email: "ftseng@classicmodelcars.com",
    officeCode: 3,
    reportsTo: 1143,
    jobTitle: "Sales Rep",
  },
  {
    employeeNumber: 1323,
    lastName: "Vanauf",
    firstName: "George",
    extension: "x4102",
    email: "gvanauf@classicmodelcars.com",
    officeCode: 3,
    reportsTo: 1143,
    jobTitle: "Sales Rep",
  },
  {
    employeeNumber: 1337,
    lastName: "Bondur",
    firstName: "Loui",
    extension: "x6493",
    email: "bondur@classicmodelcars.com",
    officeCode: 4,
    reportsTo: 1102,
    jobTitle: "Sales Rep",
  },
  {
    employeeNumber: 1370,
    lastName: "Hernandez",
    firstName: "Gerard",
    extension: "x2028",
    email: "ghernande@classicmodelcars.com",
    officeCode: 4,
    reportsTo: 1102,
    jobTitle: "Sales Rep",
  },
  {
    employeeNumber: 1401,
    lastName: "Castillo",
    firstName: "Pamela",
    extension: "x2759",
    email: "pcastillo@classicmodelcars.com",
    officeCode: 4,
    reportsTo: 1102,
    jobTitle: "Sales Rep",
  },
  {
    employeeNumber: 1501,
    lastName: "Rott",
    firstName: "Larry",
    extension: "x2311",
    email: "lrott@classicmodelcars.com",
    officeCode: 7,
    reportsTo: 1102,
    jobTitle: "Sales Rep",
  },
]);

db.student_details.find().count();

//firstName of all the employees
let fname = db.student_details.find();

fname.forEach((dt) => {
  print(dt.firstName);
});


// jobTitle in uppercase
let jobTitle = db.student_details.find();

jobTitle.forEach((dt) => {
  print(dt.jobTitle.toUpperCase());
});


// Update the employee ID of caskilo pamila to 5555. 
let data = db.student_details.find();

function update() {
  db.student_details.updateOne(
    { firstName: "Pamela" },
    { $set: { employeeNumber: 5555 } }
  );
}

data.forEach(dt => {
  if (dt.firstName === "Pamela" && dt.lastName === "Castillo") {
    update();
    print(dt.employeeNumber);
  }
});


// Update the employee ID of caskilo pamila to 5555. (Optimized)
db.student_details.updateOne(
  { firstName: "Pamela", lastName: "Castillo" },
  { $set: { employeeNumber: 5555 } }
);

let updatedData = db.student_details.findOne({ firstName: "Pamela", lastName: "Castillo" });

if (updatedData) {
  print(updatedData.employeeNumber);
} else {
  print("Not Found");
}


// Delete one record whose employee ID is 1216.

db.student_details.deleteOne({ employeeNumber: 1216 });

let deletedData = db.student_details.findOne({ employeeNumber: 1216 });

if (deletedData) {
  print("Not Deleted");
} else {
  print("Deleted");
}

/*
Update all documents in the collection by setting the skills field based on the employee’s ID:

- If the employee ID is odd, assign: ["Java", "Python", "C"]
- If the employee ID is even, assign: ["JavaScript", "HTML", "Tailwind"]
*/

db.student_details.find().forEach(employee => {
  let skills = (employee.employeeNumber % 2 === 0)
    ? ["JavaScript", "HTML", "Tailwind"]
    : ["Java", "Python", "C"];

  db.student_details.updateOne(
    { _id: employee._id },
    { $set: { skills: skills } }
  );
});

db.student_details.find()

// Unset

db.student_details.updateOne(
  {
    employeeNumber: 1002
  },
  {
    $unset: {
      skills: ""
    }
  }
)

db.student_details.findOne({ employeeNumber: 1002 })


// set

db.student_details.updateOne(
  {
    employeeNumber: 1002
  },
  {
    $set: {
      "age" : "dob"
    }
  }
)

db.student_details.findOne({ employeeNumber: 1002 })

// rename

db.student_details.updateOne(
  {
    employeeNumber: 1002

  },
  {
    $rename: { "age": "DOB" }
  }
)

db.student_details.findOne({ employeeNumber: 1002 })

/*
Write a query to Update the salaries of all employees by 10% if the salary is greater than 20,000. 
In case, there exists no attribute called salary, 
create an attribute salary with a default value of 3000 assigned to it.
*/

db.student_details.updateMany(
  {
    salary: { $gt: 20000 }
  },
  {
    $mul: { salary: 1.1 }
  }
)

db.student_details.updateMany(
  {
    employeeNumber: { $mod: [2, 0] }
  },
  {
    $unset: { salary: "" }
  }
)

db.student_details.find()

db.student_details.updateMany(
  {
    salary: { $exists: false }
  },
  {
    $set: { salary: 3000}
  }
)

db.student_details.find()