use ("practice_exam")

// db.exam.createIndex({roll: 1})
            
// db.exam.find({roll: "113"}).explain("executionStats")

// show indexes
db.exam.getIndexes()

// index named "name_roll_index" on name and roll fields
db.exam.createIndex({name: 1, roll: 1}, {name: "name_roll_index"})

db.exam.dropIndex("name_roll_index")
