const person = {
fullName: "Stew Jobs",
age: 23,
isMarried: false,
friends: ["Anil", "Sunil", "Elon"],
address: {
city: "Pune",
street: "Wakad",
pin: 411057
}
}

const result = JSON.stringify(person);
console.log(typeof result);
console.log(result);
console.log("=== JSON to Object===");
let jsonStr =
{
"userld": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
};
const user = JSON.parse(jsonStr);
console.log(typeof user);
console.log(user);
console.log(user.title);