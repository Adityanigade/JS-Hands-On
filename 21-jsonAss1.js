let employee = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },

    "referred-by": "E0012"
}
`
const result=JSON.parse(employee);
console.log(`Type is : ${typeof result}`);

console.log(result);

console.log(`Print dev : ${result.role[0]}`);


console.log(`Last Name : ${result.name.split(" ")[1]}`);
const last =result.doj.split("-");

console.log(`Joining Year : ${last[last.length-1]}`);







