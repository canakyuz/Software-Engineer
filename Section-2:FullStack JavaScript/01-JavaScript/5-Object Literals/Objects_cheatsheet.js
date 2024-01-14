// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

const product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"]
}

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`


/* 
SOLUTION #1:

const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
SOLUTION #2:

const fullAddress = `${restaurant["address"]}, ${restaurant["city"]}, ${restaurant["state"]} ${restaurant["zipcode"]}`;
SOLUTION #3:

const fullAddress = restaurant.address + ", " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode;
SOLUTION #4:

const fullAddress = restaurant["address"] + ", " + restaurant["city"] + ", " + restaurant["state"] + " " + restaurant["zipcode"];
 */