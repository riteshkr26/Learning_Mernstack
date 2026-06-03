//Object 
//Object is a collection of key value pairs
//Object is a non-primitive data type   

//obj vs [] 
//obj is a collection of key value pairs, while [] is an array which is an ordered collection of values

//creating an object        
let person = {
    name: "Ritesh",
    age: 30,
    city: "Noida"
};
//accessing object properties
console.log(person.name);
console.log(person["age"]);
//modifying object properties
person.city = "Los Angeles";
console.log(person);
//adding new properties to an object
person.country = "USA";
console.log(person);
// //deleting properties from an object
// delete person.age;
// console.log(person);

//dot notation vs bracket notation
//dot notation is used when we know the name of the property and it is a valid identifier, while bracket notation is used when the property name is dynamic or not a valid identifier
let propertyName = "name";
console.log(person[propertyName]); // using bracket notation to access property value

//iterating over an object

for (let key in person) {
    console.log(key + ": " + person[key]);
}


//example of nested objects
let student = {
    name: "Ritesh",
    age: 30,
    address: {
        city: "Noida",
        state: "Uttar Pradesh"
    ,
    location: {
    longitude: 77.5946,
    latitude: 12.9716
    },
}, 
};
console.log(student.address.city); // accessing nested object property
console.log(student.address.location.longitude); // accessing nested object property

//object destructuring
let { name, age } = person;
let { longitude, latitude } = student.address.location;
console.log(longitude); // 77.5946
console.log(latitude); // 12.9716
console.log(name); // Ritesh
console.log(age); // 30

//object.keys() method returns an array of a given object's own enumerable property names
console.log(Object.keys(person)); // ["name", "age", "city", "country"]

//object.values() method returns an array of a given object's own enumerable property values
console.log(Object.values(person)); // ["Ritesh", 30, "Los Angeles", "USA"]

//object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs
console.log(Object.entries(person)); // [["name", "Ritesh"], ["age", 30], ["city", "Los Angeles"], ["country", "USA"]]

//objecct.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object
let target = {};
let source = { a: 1, b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }  

//deep cloning an object using JSON.parse() and JSON.stringify() methods
let original = {
    name: "Ritesh",
    age: 30,
    address: {
        city: "Noida",
        state: "Uttar Pradesh"
    }
};
let clone = JSON.parse(JSON.stringify(original));
console.log(clone); // { name: "Ritesh", age: 30, address: { city: "Noida", state: "Uttar Pradesh" } }  

//after cloning if we modify the original object, the cloned object will not be affected
original.name = "Ritesh Kumar";
original.address.city = "Delhi";
console.log(clone); // { name: "Ritesh", age: 30, address: { city: "Noida", state: "Uttar Pradesh" } }  


//optional chaining operator (?.) is used to access the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid
let user = {
    name: "Ritesh",
    address: {
        town: "Noida",
        state: "Uttar Pradesh"
    }
};
console.log(user.address?.town); // Noida
console.log(user.contact?.email); // undefined (instead of throwing an error)


//computed property names in objects
let key = "name";
let value = "Ritesh";
let obj = { [key]: value };
console.log(obj); // { name: "Ritesh" } 


