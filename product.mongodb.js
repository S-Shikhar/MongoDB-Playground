use ("Exam");

// db.createCollection("products");

// db.products.insertMany([
//   {
//     name: "Apple iPhone 13",
//     price: 799,
//     category: "Electronics",
//     stock: 50,
//     createdAt: new Date(),
//   },
//   {
//     name: "Samsung Galaxy S21",
//     price: 699,
//     category: "Electronics",
//     stock: 30,
//     createdAt: new Date(),
//   },
//   {
//     name: "Sony WH-1000XM4",
//     price: 349,
//     category: "Electronics",
//     stock: 20,
//     createdAt: new Date(),
//   },
//   {
//     name: "Dell XPS 13",
//     price: 999,
//     category: "Electronics",
//     stock: 15,
//     createdAt: new Date(),
//   },
//   {
//     name: "Apple MacBook Air",
//     price: 999,
//     category: "Electronics",
//     stock: 10,
//     createdAt: new Date(),
//   },
// ]);


// // make the stock of the product "Apple iPhone 13", "Samsung Galaxy S21"  0
// db.products.updateMany(
//   { name: { $in: ["Apple iPhone 13", "Samsung Galaxy S21"] } },
//   { $set: { stock: 0 } }
// );

// db.products.find()

// // delete the products where the stock is 0
db.products.deleteMany({ stock: 0 });
db.products.find()
